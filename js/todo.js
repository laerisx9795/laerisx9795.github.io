updateNum();
//加入
function toDoLi(){
  var value = $("#IPT").val();
  var date = new Date();
  //var dateString = date.toString();
  //date.toString() =>回傳Sat Oct 01 2016 16:11:41 GMT+0800 (台北標準時間)
  //date.getMonth() 10→9 因為是第十個月 卻從0開始數?YES!
  var dateString = date.getFullYear()+
      "/"+(date.getMonth()+1)+
      "/"+date.getDate()+" "+
      date.getHours()+":"+date.getMinutes();
  //var dateString2 = date.getHours()+":"+date.___Minutes() ←fail:沒有加get;
  //陣列 var d = [];
  //d.push(date.getFullYear(),
  //  (date.getMonth()+1),
  //  +date.getDate(),
  //  date.getHours(),date.getMinutes());
  $("#SP").append(
    "<li class=\"LIST\"><label><input class=\"TCK\" type=\"checkbox\"><span class=\"task-content\">" +
    value + 
    "</span>"+"   "+
    dateString+
    //d[0]+"/"+d[1]+"/"+d[2]+" "+d[3]+":"+d[3]+
    "</label><div class=\"btn-group\"><button class=\"editThis\">編輯</button>"+" "+"<button class=\"js-delete-button\">刪除</button></div></li>");
  //var all_Inputs = $("input[type=textbox]");
  $("#IPT").val("");
  updateNum();
}

$("#BT").on("click",toDoLi);


//按Enter輸入
function isEnterPressed(event){
  //alert(event.which);  Ascii Code
  if(event.which == 13){
    toDoLi();
  }
}

$("#IPT").on("keypress",isEnterPressed);

//$("#IPT").val("");

//刪除
function deleteTask(){
  $(this).closest("li").remove();
  //$(this).remove();
  updateNum();
}


//$(".js-delete-button").on("click",deleteTask);
$("#SP").on("click",".js-delete-button",deleteTask);

//.remove() 刪除

//刪除所選
function delTask(){
  $(".TCK:checked").closest("li").remove();
  updateNum();
}

$("#Del").on("click",delTask);

//計算事項數目
//var total = $().length;  取得長度

//$().text(total);

//<span></span>

function updateNum(){
  var TaskNum = $(".TCK").length;
  //label > input > class
  $("#NUM").text(TaskNum);
  //.text()  取得內容
  //.text(something) 替換內容
}

//$().hide();
//$().show();

//顯示已完成事項
//先隱藏所有事項 再顯示已完成事項
function alreadyComplate(){
  $(".TCK").closest("li").hide();
  $(".TCK:checked").closest("li").show();
}
$("#already").on("click",alreadyComplate);

//顯示未完成事項
//先顯示所有事項 再隱藏已完成事項
function imcomplate(){
  $(".TCK").closest("li").show();
  $(".TCK:checked").closest("li").hide();
}
$("#yet").on("click",imcomplate);

//顯示所有事項
function all(){
  $(".TCK").closest("li").show();
}
$("#all").on("click",all);


//顯示已完成和顯示未完成 先處理全部再處理已完成


//編輯
//當編輯按鈕被按下 提問:要改成什麼內容?

//function edit(){
  //var V = $(".TCK").val();
  //var New = prompt("要將"+V+"改成什麼？");
  //$(".TCK").text(New);
//}

//$(".edit").on("click",edit);

//只有最原本的TEST的編輯按鈕有效用
//顯示的事項名稱不正確
//無法修改成後來輸入的東西

//function edit(){
  //$(".TCK").closest("li");
  //var V = $(".TCK").closest("li").val();
  //var New = prompt("要將"+V+"改成什麼？");
  //$(".TCK").text(New);
//}

//$(".edit").on("click",edit);

function editValue(){
  var $Task = $(this).closest("li");
  var originTaskContent = $Task.find(".task-content").text();
  var newTask = prompt("要將"+originTaskContent+"改成什麼？");
  $Task.find(".task-content").text(newTask);
}

$("body").on("click",".editThis",editValue);

//從編輯按鈕往上找 找到li
//從li往下找 取得原本事項的內容
//再輸入新的內容
//然後將新的內容取代原本的內容

//新創建的事項無法編輯
//因為原本並不存在，後來才新增
//必須委託上層　委託監聽
//$("上層已存在的").on("事件","要使用的(新創建的)",函式);

//紀錄創造時間 西元年/月/日 時:分
//var date = new Date();
//在新增事項的函式
