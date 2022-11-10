let shop = document.getElementById("shop");
let basket = JSON.parse(localStorage.getItem("cartItem")) || [];

// /////////////////
// generating data from api to products list.
// /////////////////
let generateShop = () => {
  return (shop.innerHTML = shopItemData
    .map((x) => {
      let { id, name, price, description, quantity, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `<div class="item" key=${id} id=product-id-${id}>
<img width="215"
    src=${img}
    alt=${name}>
<div class="itemdetail">
    <h3 class="item-title">${name}</h3>
    <p class="item-desc">${description}</p>
<div class="quantity-price">
<h2 class="item-price">$${price}</h2>
<div class="item-buttons">
<i onclick= "decreaseQuantity(${id})" class="bi bi-dash-lg"></i>
    <div id=${id} class="quantity"> ${
        search.item === undefined ? 0 : search.item
      }</div>
    <i onclick="increaseQuantity(${id})" class="bi bi-plus-lg"></i>
</div>
</div>
</div>
</div>`;
    })
    .join(""));
};

generateShop();

// /////////////////
// quantity and add to cart function
// /////////////////

let increaseQuantity = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);
  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  updateQuantity(selectedItem);
  // console.log(basket);
  localStorage.setItem("cartItem", JSON.stringify(basket));
};

// /////////////////
// removing quantity from cart
///////////
let decreaseQuantity = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  
  updateQuantity(selectedItem);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("cartItem", JSON.stringify(basket));
  // console.log(basket);
};

// /////////////////
// update cart with quantity
//// /////////////////
let updateQuantity = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item)
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

// ading totoal item in cart for checkout.
let calculation = () => {
  //  console.log("calculation...");
  let cartIcon = document.getElementById("cart-amount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
