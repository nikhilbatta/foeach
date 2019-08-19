// var icecreamInput = $("#icecream").val();
// var icecream = [icecreamInput]

var arr = []
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    //var arr = []
    arr.push($("#icecream").val());
    console.log(arr);
     var icecream = arr.map(function(ice){
       if (ice===""){
         alert("enter")
       }
       else{

       
    return $("#formOne").append("<li>" + ice + "</li>");
  }
    });

     // var wow = icecream.slice()
    // if($("#icecream").val() === ""){
    //   alert("please enter a value");
    // }
    // else{
    //   $("#formOne").append("<li>" + ice + "</li>");
    // }
    // icecream.forEach(function(ice){
    //
    // });
  });
});
