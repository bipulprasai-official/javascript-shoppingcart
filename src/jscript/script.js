let shop = document.getElementById("shop");
console.log(shop);

let shopItemData = [{
    id: "1234",
    name: "AIR JORDAN 1 RETRO HIGH TWIST W",
    price: "450",
    description: "HYPESTEIN guarantees 100% authenticity of this or any other product found via our store, following the Swedish and EU laws on authentic goods.",
    quantity: 5,
    img: "https://cdn.shopify.com/s/files/1/2200/1967/products/air-jordan-1-retro-high-twist-w-sneakers-nike_800x.jpg?v=1571712087"
}, {
    id: "1235",
    name: "Nike Dunk High Retro",
    price: "550",
    description: "Created for the hardwood but taken to the streets, the '80s b-ball icon returns with classic details and throwback hoops flair. Channeling vintage style back onto the streets, the padded, high-top collar of the Nike Dunk High lets you take your game anywhere—in comfort",
    quantity: 10,
    img: "https://images.footlocker.com/is/image/FLEU/244101498004_01?wid=2000&hei=2000&fmt=png-alpha"
}, {
    id: "1236",
    name: "Nike Dunk Hight Lakers",
    price: "680",
    description: "With its classic basketball design, the Nike Dunk High Retro brings vintage '80s style back to the streets.The flawless leather upper sports a slight sheen and durable overlays reminiscent of '80s basketball. The padded, high-top collar provides a classic look while offering",
    quantity: 5,
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQcrWmq1xfDImNh3W2oIFS-xNXYTMkP7AwpD69Y4r6uedDvnrOFTvdpZoxyewSmvxYgAPjNmKDAhqya3A_xrOON8C73bN7DUrsa_F1igLEurBEBPmLRqy-y"
}, {
    id: "1237",
    name: "adidas originals S.E.E.D. x Womens",
    price: "350",
    description: "adidas originals S.E.E.D. x Womens WMNS Forum Mid 'Multi' Skate Shoes (SNKR/Women's/Multicolor) GV7673 (US 5½)",
    quantity: 5,
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRa04uJe3zWhqGEDDuiezlrQu14b7PeGSuipgxVQK_zEAoMbD_1RxYlgdH1uCkpjTpatQU5VKj3GzG_Kyl8xZJQZi4Cb_GO2yFxxj11TYz9ASU5pJ-q48nRVw"
}];

// generating data from api to products list.
let generateShop = () => {
    return (shop.innerHTML = shopItemData.map((item) => {
        return `<div class="item" key=${item.id}>
<img width="215"
    src=${item.img}
    alt=${item.name}>
<div class="itemdetail">
    <h3 class="item-title">${item.name}</h3>
    <p class="item-desc">${item.description}</p>
<div class="quantity-price">
<h2 class="item-price">$${item.price}</h2>
<div class="item-buttons">
<i onclick= "decreaseQuantity(${item.id})" class="bi bi-dash-lg"></i>
    <div id=${item.id} class="quantity">${item.quantity}</div>
    <i onclick="increaseQuantity(${item.id})" class="bi bi-plus-lg"></i>
</div>
</div>
</div>
</div>`
    }).join(""))
}

generateShop();

// quantity function

let increaseQuantity = (id) => {
    let selectedItem = id;
    console.log(selectedItem)
};

basket.push({
    id:selectedItem.id,
    item:1
})
let decreaseQuantity = (id) => {
    console.log(id)
};
let updateQuantity = () => { };