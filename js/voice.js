function startVoice(){

const recognition =
new webkitSpeechRecognition();

recognition.lang = "en-US";

recognition.start();

recognition.onresult = function(event){

document.getElementById("answer").value =
event.results[0][0].transcript;

};

}