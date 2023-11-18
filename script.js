const shareButton = document.querySelector(".share");
const personInfo = document.querySelector(".personinfo");
const shareMenu = document.querySelector(".sharemenu");
let shownDiv = "person";

function switchDivs() {
	if (shownDiv === "person") {
		personInfo.style.display = "none";
		shareMenu.style.display = "flex";
		shownDiv = "share";
	} else {
		personInfo.style.display = "grid";
		shareMenu.style.display = "none";
		shownDiv = "person";
	}
	
}