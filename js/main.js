//console.log("1");
function Hello(){
  var userName = $("input#userNameIn").val();
  alert("Hello,"+userName);
  //console.log("2");
  $("input#userNameIn").val("");
}

$("#signUp").on("click", Hello);

function isEnterPressed(event){
  //alert(event.which);  Ascii Code
  if(event.which == 13){
    Hello();
  }
}

$("input#userNameIn").on("keypress",isEnterPressed);

function check(){
  var talk=true;
  var languageOpt = $("checkbox#month").prop("checked");
  alert("month:"+languaeOpt.join());
}

$("#BT").on("click", check);
