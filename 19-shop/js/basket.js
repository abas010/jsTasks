import { $, cartItems, spnTotal } from "./input.js";

let idDel, total;
let userbaskets = [];

const createElementBasket = (product) => {
  cartItems.insertAdjacentHTML(
    "beforeend",
    `<div class="cart-items">
      <div class="cart-row basket" id="${product.id}"  >
      <div class="cart-item cart-column">
      <img class="cart-item-image" src="${product.src}" width="100" height="100">
      <span class="cart-item-title">${product.name}</span>
      </div>
      <span class="cart-price cart-column">$${product.price}</span>
      <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" id="${product.id}" type="number" value="${product.cont}">
      <button class="btn btn-danger" id="${product.id}" type="button">REMOVE</button>
      </div>
      </div>
      <div>
      `
  );

  handelNum();

  totalPrice();
};
const handelNum = () => {
  const numberInput = $.querySelectorAll(".cart-quantity-input");
  numberInput.forEach((item) => {
    item.addEventListener("change", () => {
      if (item.value < 1) {
        item.value = 1;
        alert("It is not correct");
      } else {
        updateProductCont(Number(item.value), item.id);
      }
    });
  });
};

const updateProductCont = (newCont, productId) => {
  userbaskets.forEach((item) => {
    if (item.id == productId) {
      item.cont = newCont;
    }
  });
  setLocalStorage(userbaskets);
  totalPrice();
};

const getLocalStorage = () => {
  const localStorageBucket = JSON.parse(localStorage.getItem("userBaskets"));

  if (localStorageBucket) {
    userbaskets = localStorageBucket;

    userbaskets.forEach((product) => {
      createElementBasket(product);
    });
  }
  totalPrice();
};

const totalPrice = () => {
  total = 0;

  userbaskets.forEach((totolbaskets) => {
    total = total + totolbaskets.price * totolbaskets.cont;
  });
  spnTotal.innerHTML = `$${total}`;
};

const setLocalStorage = (product) => {
  localStorage.setItem("userBaskets", JSON.stringify(product));
};

const delUserProduct = (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.parentElement.remove();
    idDel = e.target.id;

    const localStorageTodos = JSON.parse(localStorage.getItem("userBaskets"));

    userbaskets = localStorageTodos;

    const mainTodoIndex = userbaskets.findIndex((todo) => todo.id === idDel);

    userbaskets.splice(mainTodoIndex, 1);

    setLocalStorage(userbaskets);

    totalPrice();
  }
};

window.addEventListener("load", getLocalStorage);
cartItems.addEventListener("click", delUserProduct);
