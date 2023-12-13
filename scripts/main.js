let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.onclick =function (){
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/贝多芬.png") {
        myImage.setAttribute("src", "images/cqut.jpg");
        }else{
        myImage.setAttribute("src","images/贝多芬.png");       
        }
}

function setUserName(){
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name",myName);
    myHeading.textContent = "西唯兵人才，" + myName;
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "西唯兵人才，" + storedName;
}

myButton.onclick = function(){
    setUserName();
}