// 取得 p 元素物件,修改顯示內容為 'Hello world!'
var myHeading = document.querySelector('p');
myHeading.textContent = 'Hello world!';

// 取得 button 元素物件
var myButton = document.querySelector('button');
//設定 button click事件
myButton.onclick = function() {
  setUserName();
}
/*
變數宣告使用
*/
let myVariable;
myVariable = 'vava';

//點選 p 元素物件時,顯示視窗
document.querySelector('p').onclick = function() {
    //彈出提示視窗
    alert(myVariable);
}

//點選 img 元素物件時,更換顯示圖片
var myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'yi_1.jpg') {
      myImage.setAttribute ('src','yi_2.jpg');
    } else {
      myImage.setAttribute ('src','yi_1.jpg');
    }
}

//檢查是否有 "name'變數紀錄,有的話讀取,沒的話顯示
//-->存到那去？
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'wwww ' + storedName;
}

function setUserName() 
{
  //顯示輸入視窗
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) 
  { return;}
  //紀錄輸入值
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'wwww ' + myName;
}