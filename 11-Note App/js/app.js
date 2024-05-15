let $ = document;

let inputFild = $.querySelector("#input-field");
let btnAddItem = $.querySelector("#btn-save");
let btnRemoveItem = $.querySelector("#btn-delete");
let divItems = $.querySelector("#listed");
let color = $.querySelectorAll(".color-box");

function addItem(e) {
  let textVal = inputFild.value;

  let divElem = $.createElement("div");
  let pElem = $.createElement("p");
  let colorDiv = inputFild.getAttribute("style");

  divElem.setAttribute("class", "card shadow-sm rounded ");
  pElem.setAttribute("class", "card-text p-3");

  divElem.style = colorDiv;

  pElem.innerHTML = textVal;

  divElem.append(pElem);
  divItems.append(divElem);

  function removeItem(params) {
    this.remove();
  }

  inputFild.value = "";
  inputFild.style.backgroundColor = "";

  divElem.addEventListener("click", removeItem);
}

function addItemKeyEnter(e) {
  if (e.keyCode === 13) {
    addItem();
  }
}

function removeTextVal(e) {
  inputFild.value = "";
}

color.forEach(function (child) {
  function baccolor() {
    let color = child.getAttribute("style");
    inputFild.style = color;
  }

  child.addEventListener("click", baccolor);
});

btnAddItem.addEventListener("click", addItem);
inputFild.addEventListener("keyup", addItemKeyEnter);
btnRemoveItem.addEventListener("click", removeTextVal);