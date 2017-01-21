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
    if($(monthOpt[i]).prop("checked")){
      months.push($(monthOpt[i]).val());
    }
  }
  if(talk)
    alert("month:"+months.join());
}

$("#BT").on("click", check);

function pageone(){
  $("div#Page1").show();
  $("div#Home").hide();
}

//$("#pageOne").on("click", pageone);

function home(){
  $("div#Page1").hide();
  $("div#Home").show();
}

//$("#HOME").on("click", home);
