const shareButton = document.querySelector(".share");
const personInfo = document.querySelector(".personinfo");
const shareMenu = document.querySelector(".sharemenu")

shareButton.addEventListener('click', function() {
	personInfo.style.display = "none";
	shareMenu.style.display = "flex"
})