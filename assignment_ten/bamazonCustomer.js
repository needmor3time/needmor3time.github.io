var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon",
  insecureAuth : true
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start() {
    // query the database for all items being auctioned
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      // once you have the items, prompt the user for which they'd like to bid on
      inquirer
        .prompt([
          {
            name: "choice",
            type: "list",
            choices: function() {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                //create an object that will house key value pair of name and quantity, then that will be pushed to the array
                var choiceObj = {name:results[i].product_name, quantity:results[i].stock_quantity, price:results[i].price};
                //add quantity next to name"
                choiceArray.push(choiceObj.name + " " + choiceObj.quantity + " $" + choiceObj.price + "/ea"); //.name, choiceObj.quantity);
              }
              //return contents on choice array
              return choiceArray; 
            },
            message: "What would you like to buy?"
          },
          {
            name: "quantity",
            type: "input",
            message: "How many would you like to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
            }
          }
        ])
        .then(function(answer) {
          // get the information of the chosen item
          var chosenItem;
          for (var i = 0; i < results.length; i++) {
              var prodquant = results[i].product_name + " " + results[i].stock_quantity + " $" + results[i].price + "/ea";
              //console.log("product + quantity", prodquant);
              //console.log("answer choice", answer.choice);
            if (prodquant === answer.choice) {
              chosenItem = results[i];
              //console.log(chosenItem);
            }
          };
  
          // determine if quantity in stock is enough
          //console.log("item quantity", chosenItem.stock_quantity);
          if (chosenItem.stock_quantity >= parseInt(answer.quantity)) {
            // quantity didn't exceed stock, so update db, let the user know, and start over
            console.log("item quantity", chosenItem.stock_quantity);
            var new_quantity = (chosenItem.stock_quantity - answer.quantity);
            console.log("Your purchase so far is $" + chosenItem.price * answer.quantity)
            console.log("Quantity remaining " + new_quantity);
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                    stock_quantity: new_quantity
                },
                {
                  item_id: chosenItem.item_id
                }
              ],
              function(error) {
                if (error) throw err;
                console.log("Item successfully purchased!");
                start();
              }
            );
          }
          else {
            // quantity was too much , so apologize and start over
            console.log("Your quantity was too high. Try again...");
            start();
          }
        });
    });
  }