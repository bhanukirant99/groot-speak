var btnTranslate = document.querySelector("#btn-translate");
var textAreaValue = document.getElementById("text-area-value");
var translateOutput = document.getElementById("translate-output")
// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

const url = "https://api.funtranslations.com/translate/groot.json"; 

const getTranslateURL = (text) => {
    return url + "?" + "text=" + text;
}

const errorMessage = (error) => {
    alert("Something went wrong!!! Try again later");
    return "error, occured" + error
}

function takeInput () {
    const inputText = textAreaValue.value;    
    fetch(getTranslateURL(inputText))
    .then(response => response.json())
    .then(json => translateOutput.innerHTML = json.contents.translated)
    .catch(error => errorMessage(error))
    
}

btnTranslate.addEventListener("click", takeInput)