$("#submit-button").on("click", function(event) {
  console.log("test")
  event.preventdefault();
  
  var newBurger = {
    burgerName: $ ("#burger").val().trim(),
    devoured: 0
  };

  $.post("/api/burgers", newBurger).then(function (data){
    console.log(data);
  });
  
  $("#burger").val("");
  location.reload();

});

$(".change-devoured").on("click", function(event) {
var id = $(this).data("id");
var newDevoured = $(this).data("newDevoured");

var newDevouredState = {
  devoured: newDevoured
};

//send the PUT request..
$ajax("/api/burgers/" + id, 
{
  type: "PUT",
  data: new DevouredState
}).then (
  function() {
    console.log("changed devoured to " , newDevoured);

    //reload the page to get the updated list..
    location.reload();

  }
);

}
);