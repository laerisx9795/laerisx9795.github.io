//var userName = $("input#userNameIn").val();

//alert("Hello,"+userName);

console.log("1");
function Hello(){
  var name =$("input#a").val();
  alert("Hello,"+name);
  console.log("2");
}

$("#BT").on("click", Hello);
