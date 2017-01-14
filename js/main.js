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
  var monthOpt = $("input#month");
  var months =[];
  for(var i=0;i<monthOpt.length;i++){
    console.log(i);
    if($(monthOpt[i]).prop("checked")){
      months.push($(monthOpt[i]).val());
      console.log(i+100);
    }
  }
  if(talk)
    alert("month:"+months.join());
  $($("#month").prop("checked")).val("");
}

$("#BT").on("click", check);
