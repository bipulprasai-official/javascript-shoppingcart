let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');

// fetching data from localStorage
let basket = JSON.parse(localStorage.getItem("cartItem")) || [];
// console.log(basket);

// ading totoal item in cart for checkout.
let calculation = () => {
    //  console.log("calculation...");
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();
  
 let generateCartItems = () => {
     if(basket.length !== 0){
return shoppingCart.innerHTML = basket.map((x) => {
    let { id, item } = x;
    let search = shopItemData.find((y) => y.id === id) || [];
    return `
    <tr>
    <td><img width="80" src=${search.img} alt=${search.name}/></td>
    <td>${search.name}</td>
    <td>AUD $${search.price}
    </br>
    <h5>total Price : AUD $${item * search.price} </h5>
    </td>
    <td>
    <div class="item-buttons">
    <i onclick="decreaseQuantity(${id})" class="bi bi-dash-lg"></i>
    <div id=${id} class="quantity">${item}</div>
    <i onclick="increaseQuantity(${id})" class="bi bi-plus-lg"></i>
</div>
    </td>
    <td>
    <div class="item-buttons">
    <button onclick="removeItem(${id})" class="btndelt"> 
   Remove
    </button>
 
</div>
    </td>
    </tr>
    `
}).join("");
     }else{
         shoppingCart.innerHTML = ``
         label.innerHTML = `<h2>Cart is Empty.</h2>
         <a href="index.html">
         <button class="HomeBtn">Back to home</button>
         </a>
         `;
     }
 }

 generateCartItems();

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
  generateCartItems();
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
    generateCartItems();
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
    
//  Remove item from cart
let removeItem = (id) => {
let selectedItem = id;
// console.log(selectedItem);
basket = basket.filter((x) => x.id !== selectedItem);
generateCartItems();
TotalAmounts();
calculation();
localStorage.setItem("cartItem", JSON.stringify(basket));
}

// Total Amounts
let TotalAmounts = () => {
if(basket.length !==0) {
    let amount = basket.map((x) =>{
        let {item,id} = x;
        let search = shopItemData.find((y) => y.id === id) || [];
        return item * search.price;
    }).reduce((x,y) => x + y,0)
    // console.log(amount);
    label.innerHTML = `<h4 class="text-center">Total Amount: AUD $${amount}</h4>
    <div class="btntotal">
    <button class="checkout">Checkout</button>
    <button onclick="clearCart()" class="removeAll">Clear Cart</button>
    </div>
   
    `;
}
else return;
}
TotalAmounts();

let clearCart = () => {
    basket = [];
    generateCartItems();
    calculation();
    localStorage.setItem("cartItem", JSON.stringify(basket));

}
