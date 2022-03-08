function Clickity (Clackity) {
	var titan = document.getElementById("1st");
	var warlock =document.getElementById("2nd");
	var hunter = document.getElementById("3rd");
	hunter.setAttribute('src',warlock.getAttribute("src"));
	warlock.setAttribute('src',titan.getAttribute("src"));
	titan.setAttribute('src',Clackity);
}