const shareButton = document.querySelector(".share");
const shareMenu = document.querySelector(".sharemenu");
let shownDiv = "person";

function switchDivs() {
	if (shownDiv === "person") {
		shareMenu.style.display = "flex";
		shownDiv = "share";
	} else {
		shareMenu.style.display = "none";
		shownDiv = "person";
	}
}