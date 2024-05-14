let lengthUser = document.getElementById("lngUser");
let spnRzalt = document.querySelector("span");
let maxlength = lengthUser.getAttribute("maxlength");

function rzaltelength() {
  var length = maxlength - lengthUser.value.length;

  spnRzalt.innerHTML = length;
}

lengthUser.addEventListener("keyup", rzaltelength);
