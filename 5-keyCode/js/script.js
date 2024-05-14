let $ = document;

let valKey = $.getElementById("key");
let valLoc = $.getElementById("location");
let valWhich = $.getElementById("which");
let valKeycode = $.getElementById("keyCode");
let valCode = $.getElementById("code");

function informayionKey(e) {
	e.preventDefault();

	starter.style.display = "none";
	heading.style.display = "flex";
	ascii.style.display = "flex";
	infos.style.display = "flex";
  
	let eventkey = e.key;
	let eventLocation = e.location;
	let eventWhich = e.keyCode;
	let eventcode = e.code;
  
	valKey.innerHTML = eventkey;
	valLoc.innerHTML = eventLocation;
	valWhich.innerHTML = eventWhich;
	valKeycode.innerHTML = eventWhich;
	valCode.innerHTML = eventcode;
}


$.body.addEventListener("keydown", informayionKey);