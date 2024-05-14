let loderSite = document.querySelector(".loader");

function hiddenLoader(e) {
  loderSite.classList.add("hidden");
}

window.addEventListener("load", hiddenLoader);
