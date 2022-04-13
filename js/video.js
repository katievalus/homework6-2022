var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video")
	video.play()
	
	document.querySelector("#volume").innerHTML = video.volume *100+"%"
	console.log("The current volume is " + video.volume*100)
 });



document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
   	video.pause()
});
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate)
   	video.playbackRate *= .95
	console.log("New speed is " + video.playbackRate)
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate)
   	video.playbackRate *= 1.05
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#mute").addEventListener("click", function() {
	var muteStatus = document.querySelector('#mute').innerHTML;
	if(muteStatus == "Mute"){
		video.muted = true;
		document.querySelector('#mute').innerHTML = 'unmute'
	}
	else{
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'mute'
	}
});
document.querySelector("#skip").addEventListener("click", function() {
	//var time = video.currentTime 
	if (video.currentTime > video.duration - 15){
		video.currentTime = 0
		console.log("Current time is " + video.currentTime)
	}
	else{
		video.currentTime += 15
		console.log("Current time is " + video.currentTime)

	}
});
document.querySelector("#slider").addEventListener("click", function() {
	//var vol = this.value;
	video.volume = this.value / 100;
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'
	console.log("The volume is at " + this.value + "%");
	
});




