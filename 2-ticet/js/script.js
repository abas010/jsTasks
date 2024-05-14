//
let conSelbox = document.querySelector(".countrySelect");
let citySelect = document.querySelector(".citySelect");

let conData = {
  Iran: ["tehran", "qazvin", "karag"],
  Canada: ["Sdot", "sds", "sasdasd", "sxcs"],
  US: ["aasda", "plo,p", "uhyuhi"],
};

function chengeSelcct() {
  if (conSelbox.value === "Please Select") {
    citySelect.innerHTML = "";
    citySelect.innerHTML = "<option>Please Select...</option>";
  } else {
    let nameCon = conSelbox.value;
    let conCityes = conData[nameCon];

    citySelect.innerHTML = "";

    conCityes.forEach(function (a) {
      citySelect.innerHTML += "<option>" + a + "</option>";
    });
  }
}

conSelbox.addEventListener("change", chengeSelcct);
