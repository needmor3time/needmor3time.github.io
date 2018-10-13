DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price INT(10) NULL,
  stock_quantity INT(10) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("junk", "hoarding", 50, 2), ("stuff", "hoarding", 5, 30), ("clutter", "hoarding", 1, 100), ("funkorama", "hoarding", 75, 12), ("premium junk", "hoarding", 100, 4), ("premium stuff", "hoarding", 10, 60), ("premium clutter", "hoarding", 2, 200), ("funkorama", "hoarding", 75, 12), ("trinket", "momento", 15, 1), ("souvenir", "momento", 35, 5);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'products

USE bamazon;
SELECT * FROM products WHERE product_name = "junk"