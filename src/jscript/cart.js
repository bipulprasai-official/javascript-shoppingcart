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
    <td>AUD $${search.price}</td>
    <td>
    <div class="item-buttons">
    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
    <div id=${id} class="quantity">${item}</div>
    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
</div>
    </td>
    <td>
    <div class="item-buttons">
    <button class="btndelt"> 
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