let $ = document;

let btnModal = $.getElementById("btn");
let modal = $.getElementById("modal-parent");
let section = $.getElementById("scn");
let closeModal = $.getElementById("close");

function showModalClick() {
  modal.style.display = "block";
  section.style.filter = "blur(10px)";
}

function hideModalClick() {
  modal.style.display = "none";
  section.style.filter = "blur(0px)";
}

function hideModalESC(e) {
  if (e.keyCode === 27) {
    modal.style.display = "none";
    section.style.filter = "blur(0px)";
  }
}

btnModal.addEventListener("click", showModalClick);
closeModal.addEventListener("click", hideModalClick);
$.body.addEventListener("keyup", hideModalESC);
