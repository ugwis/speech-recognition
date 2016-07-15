window.specRecognition = window.SpeechRecognition || webkitSpeechRecognition;
var recognition = new webkitSpeechRecognition();
recognition.lang = 'ja';

/*recognition.addEventListener('result',function(event){
	var text = event.results.item(0).item(0).transcript;
	console.log(text);
	$("#results").val(text);
	recognition.start();
},false);*/

recognition.onresult = function(event){
	console.log(event);
	console.log(event.results);
}

function record(){
	recognition.start();
}
