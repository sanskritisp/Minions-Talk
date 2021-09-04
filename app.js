// console.log("script is working");
// alert("this is the alert script")
// var username = prompt("give me your username ")
// alert("welcome!"+ username)
var outputText = document.querySelector("#output")
const inputTxt = document.querySelector("#txt")
var btnTrans = document.querySelector("#btn-trans")
// console.log(btnTrans)
function clickevenhandler(){
    outputText.innerText = "Translated into banana "+ inputTxt.value


//     console.log("clicked") 
// console.log("input", inputTxt.value)
}

// add event listener
btnTrans.addEventListener("click", clickevenhandler)


