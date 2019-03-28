$(document).ready(function(){
  var height = parseInt(prompt("How tall are you in feet?"));
  
  if (height >= 5) {
    $('#rides').show();
  } else {
    $('#under-5ft').show();
  }
});


