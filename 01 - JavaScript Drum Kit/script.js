//used to stop the transition after the the transform has ended
function removeTransition(e) {
	//if it is transform continue to remove the playing class
	if (e.propertyName !== "transform") return;
	e.target.classList.remove("playing");
}

function playSound(e) {
	//selects the audio to play the right sound
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	//selects the key to be used for the animation
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!audio) return; //stops the function from running for keys that dont have an audio element

	key.classList.add("playing");
	audio.currentTime = 0; //rewinds to the start and allows a sound to be played multiple times
	audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
