// const switchElement = document.querySelector(".switch");

// let them;
// let TF = false;
// switchElement.addEventListener("click", function () {
//   if (TF == false) {
//     localStorage.setItem("them", "dark");
//     TF = true;
//   } else {
//     localStorage.setItem("them", "");
//     TF = false;
//   }
//   themHandel();
// });

// function themHandel() {
//   them = localStorage.getItem("them");

//   document.body.setAttribute("class", them);
// }
// them = localStorage.getItem("them");

// document.body.setAttribute("class", them);

const switchElement = document.querySelector(".switch");

switchElement.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.className.includes("dark")) {
    localStorage.setItem("them", "dark");
  }
  else{
    localStorage.setItem("them",'light');
  }
});

window.onload = function () {
  let localStorageThem = localStorage.getItem('them')

  if (localStorageThem === 'dark') {
    document.body.classList.add('dark')
  }
}
