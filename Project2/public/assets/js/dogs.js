// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-adopt").on("click", function(event) {
    var id = $(this).data("id");
    var newAdopt = $(this).data("newadopt");

    var newAdoptState = {
      adopted: newAdopt
    };

    // Send the PUT request.
    $.ajax("/api/dogs/" + id, {
      type: "PUT",
      data: newAdoptState
    }).then(
      function() {
        console.log("changed adopt to", newAdopt);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newDog = {
      name: $("#ca").val().trim(),
      adopted: $("[name=adopted]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/dogs", {
      type: "POST",
      data: newDog
    }).then(
      function() {
        console.log("created new dog profile");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-dog").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/dogs/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted dog", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
// THIS WAS THE CODE IN JAMIE'S JAVASCRIPT.js FILE
$("div[id^='myModal']").each(function(){
  
  var currentModal = $(this);
  
  //click next
  currentModal.find('.btn-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show'); 
  });
  
  //click prev
  currentModal.find('.btn-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show'); 
  });

});