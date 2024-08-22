import { allProducts } from "./product.js";
import { shopItems, categoryDiv, searchElem } from "./input.js";

let userbaskets = [];
let category = [];

const createElement = (array) => {
  shopItems.innerHTML = "";
  array.forEach((product) => {
    shopItems.insertAdjacentHTML(
      "beforeend",
      ` 
          <div class="shop-item" >
            <img class="shop-item-image" src= ${product.src} />
            <span class="shop-item-title">${product.name}</span>
            <div class="shop-item-details">
              <span class="shop-item-price">$${product.price}</span>
              <button class="btn btn-primary shop-item-button" id="${product.id}" type="button">
                ADD TO CART
              </button>
            </div>
          </div>
          `
    );
  });
};

const addProductBasket = (e) => {
  if (e.target.tagName === "BUTTON") {
    const divShopItem = e.target;

    allProducts.forEach((product) => {
      if (product.id == divShopItem.id) {
        const contProduct = userbaskets.includes(product);

        if (contProduct) {
          product.cont++;
          setLocalStorage(userbaskets);
        } else {
          userbaskets.push(product);
          setLocalStorage(userbaskets);
        }
      }
    });
  }
};

const setLocalStorage = (product) => {
  localStorage.setItem("userBaskets", JSON.stringify(product));
};

const getLocalStorage = () => {
  const localStorageBucket = JSON.parse(localStorage.getItem("userBaskets"));

  if (localStorageBucket) {
    userbaskets = localStorageBucket;
  }
};

const categoryClick = (e) => {
  category = [];
  console.log(category);

  if (e.target.tagName === "BUTTON") {
    const categoryProduct = e.target.getAttribute("category");
    allProducts.forEach((product) => {
      if (product.uniqueCode == categoryProduct) {
        category.push(product);
      } else if (categoryProduct == "All") {
        category.push(product);
      }
    });
    createElement(category);
  }
};

const searchProduct = (e) => {
  if (e.keyCode === 13) {
    category = [];
    e.preventDefault(SubmitEvent);
    const valText = e.target.value.trim();

    allProducts.forEach((product) => {
      if (product.uniqueCode == valText || product.name == valText) {
        category.push(product);
      }
    });
    createElement(category);
    if (category.length == 0) {
      shopItems.insertAdjacentHTML("beforeend", `<h1> No items found </h1>`);
    }
    e.target.value = "";
  }
};

window.addEventListener("load", getLocalStorage, createElement(allProducts));
shopItems.addEventListener("click", addProductBasket);
categoryDiv.addEventListener("click", categoryClick);
searchElem.addEventListener("keyup", searchProduct);
