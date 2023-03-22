import './style.css'
import { menuItems } from './menuitems'

function makeMenuItems() {
  const listItems = menuItems.map(plateItem => {
    return `<li>
    <div class="plate">
    <img src="./src/images/${plateItem.image}" alt="${plateItem.alt}" class="plate">
    </div>
    <div class="content">
    <p class="menu-item">${plateItem.name}</p>
    <p class="price">$${plateItem.price / 100}</p>
    <button data-name='${plateItem.name}' class="add">Add to Cart</button>
    </div>
    </li>`
  })
  document.querySelector('#menulist')?.insertAdjacentHTML('afterbegin', listItems.join("\n"))
  console.log(menuItems)
}

function attachEventListeners() {
  document.querySelectorAll(".add").forEach(button => {
    if (!(button instanceof HTMLElement)) {
      return
    }
    button.addEventListener("click", () => {
      if (button.dataset.name) {
        makeCartItems(button.dataset.name)
      }
    })
  })
}


function makeCartItems(itemName: string) {
  const found = menuItems.find(plateItem => itemName === plateItem.name)
  if (found) {
    found.count += 1;
    let cartItem = `<li id="${found.name}">
    <div class="plate">
    <img src="./src/images/${found.image}" alt="${found.alt}" class="plate" />
    <div class="quantity">1</div>
    </div>
    <div class="content">
    <p class="menu-item">${found.name}</p>
    <p class="price">$${found.price / 100}</p>
    </div>
    <div class="quantity__wrapper">
    <button class="decrease">
    <img src="./src/images/chevron.svg" />
    </button>
    <div class="quantity">${found.count}</div>
    <button class="increase" onclick="increaseCount('${found.name}')">
    <img src="./src/images/chevron.svg" />
    </button>
    </div>
    <div class="subtotal">
    $ ${found.count * found.price / 100}
    </div>
    </li>`
    document.querySelector('#cartList')?.insertAdjacentHTML('afterbegin', cartItem)
    disableButton()
    console.log(menuItems)
  }
}


function disableButton() {
  const isInCart = menuItems.filter(cartItem => cartItem.count > 0);
  const addButtonList = document.querySelectorAll('.add');
  
  addButtonList.forEach((addButton) => {
    const dataName = addButton.getAttribute('data-name');
    const itemInCart = isInCart.find(item => item.name === dataName);
    if (itemInCart) {
      (addButton as HTMLButtonElement).disabled = true;
      addButton.textContent = "In Cart";
    } else {
      (addButton as HTMLButtonElement).disabled = false;
      addButton.textContent = "Add to Cart"
    }
  });
}

function increaseCount(cartItemName: string) {
  const foundCartItem = menuItems.find(cartItem => cartItemName === cartItem.name)
  const item = document.getElementById(cartItemName);
  const itemQuantities = item?.querySelectorAll(".quantity");
  
  if (itemQuantities !== null && foundCartItem) {
    foundCartItem.count += 1;
    itemQuantities?.forEach(itemQuantity => {
      const quantityValue = parseInt(itemQuantity.textContent || "0");
      itemQuantity.textContent = (quantityValue + 1).toString();
    });
  }
}



addEventListener("DOMContentLoaded", (event) => {
  makeMenuItems()
  attachEventListeners()
});

