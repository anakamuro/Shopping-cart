import React from 'react';
import {useNavigate} from "react-router-dom";
import "./Cart.css";


function Cart({cartItems, addToCart, removeToCart}) {
  const navigate = useNavigate();
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  return (
    <section className="cart">
      <div className="cartItems">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
          {cartItems.map((product) => {
            // if(cartItems[product.id] !== 0){
               const {id, image, name, price}= product;
               console.log(product)
                return (
                <div className="card" key={id}>
                  <div>
                    <img src={image} alt={name} style={{height: '6rem'}}/>
                  </div>
                  <div>{name}</div>
                  <div>${price}</div>
                  <div className="countHandler">
                    {/* <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/> */}
                    <button onClick={() => addToCart(product)}>+</button>
                    <button onClick={() => removeToCart(product)}>-</button>
                  </div>
                  <div>
                    {product.quantity} * ${product.price.toFixed(2)}
                  </div>
                </div>
                )}
                )}
      </div>
      <div className="checkout">
                    <p> Subtotal: ${itemsPrice.toFixed(2)}</p>
                    <button className="btn" onClick={() => navigate('/')}>Continue Shopping</button>
                    <button className="btn">Checkout</button>
      </div>
    </section>
  )
}

export default Cart