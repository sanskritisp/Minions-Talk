var outputText = document.querySelector("#output")
var inputTxt = document.querySelector("#txt")
var btnTrans = document.querySelector("#btn-trans")

var url ="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return url + "?" + "text=" + text
}
function geterror(error){
    console.log("error occured",error)
}
function clickeventhandler(){

    var txtInput = inputTxt.value;
    fetch(getTranslationURL(txtInput))

        .then(response => response.json())
        .then(json =>{
            var transtext =json.contents.translated;
            outputText.innerText = transtext;
        })
            
           
        .catch(geterror)
    };
    btnTrans.addEventListener("click", clickeventhandler) //adding event listener


    
  

