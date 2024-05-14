const $ = document;

let clickBody = $.body;
let contextmenu = $.getElementById("contextMenu");

function showContextmenu(e) {
  e.preventDefault();
  contextmenu.style.display = "block";
  contextmenu.style.left = e.pageX;
  contextmenu.style.top = e.pageY;
}

function hiddenContextmenuClick(e) {
  contextmenu.style.display = "none";
}

function hiddenContextmenuESC(e) {
  if (e.keyCode === 27) {
    contextmenu.style.display = "none";
  }
}

clickBody.addEventListener("contextmenu", showContextmenu);
clickBody.addEventListener("click", hiddenContextmenuClick);
clickBody.addEventListener("keydown", hiddenContextmenuESC);
