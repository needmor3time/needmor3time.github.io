//INSIDE PUBLIC FOLDER WITHIN JS FOLDER
$(document).ready(function(){
    //Variables for user login form
    var loginForm = $(".loginForm");
    var emailInput = $("#emailInput");
    var passwordInput = $("#passwordInput");

    //validation confirming email/passowrd present
    loginForm.on("submit", function(event){
        event.preventDefulat();

        var userData ={
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
        if (!userData.email || userData.password){
            return;
        }
        //correct email/password run loginUser function and clear form
        loginUser(UserData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });
    //Posting to api/login, and redirects to member acess
    function loginUser(email, password) {
        $.post("api/login", {
            email: email,
            password: password
        }).then(function(data){
            window.location.replace(data);
            //log errors
        }).catch(function(err){
            console.log(err);
        });
    }
});