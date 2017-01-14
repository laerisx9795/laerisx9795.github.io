var userName = $("input#userNameIn").val();

alert("Hello,"+userName);

var name =$("input#a").val();

function hello(){
  alert("Hello,"+name);
}

$("#BT").on("click",hello);
