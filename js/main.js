updateNum();
//console.log("1");
function Hello(){
  var userName = $("input#userNameIn").val();
  alert("Hello,"+userName);
  //console.log("2");
  updateNum();
}

$("#signUp").on("click", Hello);

function isEnterPressed(event){
  //alert(event.which);  Ascii Code
  if(event.which == 13){
    Hello();
  }
  updateNum();
}

$("input#userNameIn").on("keypress",isEnterPressed);
