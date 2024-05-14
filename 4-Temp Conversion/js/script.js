let $ = document;
//ورودی ها
const spnC = $.querySelector(".C");
const spnF = $.querySelector(".F");
const inp = $.querySelector("#converter");
const pShow = $.querySelector(".result");
const chengBtn = $.querySelector(".changeButton");
const convertBtn = $.querySelector(".convertButton");
const restBtn = $.querySelector(".resetButton");
//توابع
function chengFormol() {
  if (spnC.innerHTML == "°C") {
    spnC.innerHTML = "°F";
  } else {
    spnC.innerHTML = "°C";
  }
  if (spnF.innerHTML == "°C") {
    spnF.innerHTML = "°F";
  } else {
    spnF.innerHTML = "°C";
  }

  if (inp.placeholder == "°C") {
    inp.placeholder = "°F";
  } else {
    inp.placeholder = "°C";
  }

  if ($.title == "SalzLearn| Js | °C to °F") {
    $.title = "SalzLearn| Js | °F to °C";
  } else {
    $.title = "SalzLearn| Js | °C to °F";
  }
}
function Comput() {
  let valInp = inp.value;

  if (inp.value == "") {
    pShow.innerHTML = "not value";
    pShow.style.color = "red";
  } else if (isNaN(inp.value)) {
    pShow.innerHTML = "plise enter number";
    pShow.style.color = "red";
  } else {
    if (inp.placeholder == "°C" && !isNaN(inp.value)) {
      var rzaltC = (valInp * 9) / 5 + 32;
    } else if (inp.placeholder == "°F" && !isNaN(inp.value)) {
      var rzaltF = ((valInp - 32) * 5) / 9;
    }

    if (inp.placeholder == "°C") {
      pShow.innerHTML = valInp + "°C" + " to " + rzaltC.toFixed(2) + "°F";
    } else if (inp.placeholder == "°F") {
      pShow.innerHTML = valInp + "°F" + " to " + rzaltF.toFixed(2) + "°C";
    }
  }
}

function resetRezalt() {
  inp.value = "";
  pShow.innerHTML = "";
}
//رویدادها
chengBtn.addEventListener("click", chengFormol);
convertBtn.addEventListener("click", Comput);
restBtn.addEventListener("click", resetRezalt);
