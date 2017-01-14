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
  var monthOpt = $("checkbox#month");
  var months =[];
  for(var i=0;i<monthOpt.lenth;i++){
    console.log(i);
    if($("checkbox#month").prop("checked")){
      months.push($("checkbox#month").val());
      console.log(i+100);
    }
  }
  if(talk)
    alert("month:"+months.join());
}

$("#BT").on("click", check);
