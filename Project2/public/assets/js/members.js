//INSIDE PUBLIC FOLDER WITHIN JS FOLDER
$(document).ready(function(){
    //get request to find the user and updates HTML
    $.get("/api/user_data").then(function(data){
        $(".member-name").text(data.email);
    });

});