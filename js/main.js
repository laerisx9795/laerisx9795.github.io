/*var userName = $("input#userNameIn").val();

alert("Hello,"+userName);
*/
function hello(){
  var name =$("input#a").val();
  alert("Hello,"+name);
}

$("button#BT").on("click",hello);
