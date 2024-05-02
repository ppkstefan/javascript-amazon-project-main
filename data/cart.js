export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart)
{
  cart=[
  
];
}
/*[
    {
        productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity:2,
    },
    {
        productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity:1,
    },
];*/

function saveToStorage()
{
  localStorage.setItem('cart',JSON.stringify(cart));
}


export function addToCart(productId){

    let matchingItem;
  
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });
  
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1
      });
    }
    saveToStorage();
  }
/*let productsCart; 
products.forEach((products)=>{
    productsCart+=`
    <div class="delivery-date">Delivery date: Tuesday, June 21</div>

    <div class="cart-item-details-grid">
      <img
        class="product-image"
        src="${product.image}"
      />

      <div class="cart-item-details">
        <div class="product-name">
            ${product.name}
        </div>
        <div class="product-price">$${(product.priceCents/100).toFixed(2)}</div>
        <div class="product-quantity">
          <span> Quantity: <span class="quantity-label">2</span> </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input
            type="radio"
            checked
            class="delivery-option-input"
            name="delivery-option-1"
          />
          <div>
            <div class="delivery-option-date">Tuesday, June 21</div>
            <div class="delivery-option-price">FREE Shipping</div>
          </div>
        </div>
        <div class="delivery-option">
          <input
            type="radio"
            class="delivery-option-input"
            name="delivery-option-1"
          />
          <div>
            <div class="delivery-option-date">Wednesday, June 15</div>
            <div class="delivery-option-price">$4.99 - Shipping</div>
          </div>
        </div>
        <div class="delivery-option">
          <input
            type="radio"
            class="delivery-option-input"
            name="delivery-option-1"
          />
          <div>
            <div class="delivery-option-date">Monday, June 13</div>
            <div class="delivery-option-price">$9.99 - Shipping</div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
})
document.querySelector('.cart-item-container').innerHTML = productsCart;
*/

export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
          newCart.push(cartItem);
      }
  });
  cart = newCart;
  saveToStorage();
}