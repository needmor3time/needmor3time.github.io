//INSIDE PUBLIC FOLDER WITHIN JS FOLDER

$(document).ready(function () {
    //variables for new member signup form
    var signUpForm = $("#signUp");
    var emailInput = $("#email-input");
    var passwordInput = $("#password-input");

    //Validation for valid input on email/passport
    signUpForm.on("submit", function (event) {
        event.preventDefult();
        console.log("User Signed up" + emailInput)
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }
        //With valid email/password, run signUpUser 
        signUpUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    //Posting to api/signup
    function signUpUser(email, password) {
        $.post("/api/signup", {
            email: email,
            password: password
        }).then(function (data) {
            window.location.replace(data);
            //show err to user with handleLoginErr
        }).catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.response.JSON);
        $("alert").fadeIn(500);

    }
});
