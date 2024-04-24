import React, {useContext} from 'react';
import {ShopContext} from "../context/ShopContext";
import {products} from "./products";
import {useNavigate} from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <section className="cart">
      <div className="carrtItems">
        <div>
          <h1>Your Cart Items</h1>
        </div>
          {products.map((product) => {
            if(cartItems[product.id] !== 0){
               const {id, image, name, price}= product;
                return (
                <div className="card" key={id}>
                  <div>
                    <img src={image} alt={name} style={{height: '6rem'}}/>
                  </div>
                  <div>{name}</div>
                  <div>{price}</div>
                  <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}>+</button>
                  </div>
                </div>
                )
              }})}
      </div>
      {totalAmount > 0 ? (
      <div className="checkout">
                    <p> Subtotal: ${totalAmount}</p>
                    <button className="btn" onClick={() => navigate('/')}>Continue Shopping</button>
                    <button className="btn">Checkout</button>
      </div>
      ) : (
       <h1> Your Cart is Empty</h1>
      )}
    </section>
  )
}

export default Cart