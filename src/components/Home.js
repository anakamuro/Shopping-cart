import React, {useContext} from 'react';
import {products} from "./products.js"
import '../App.css';
import {ShopContext} from "../context/ShopContext.js"

function Home() {
    const {addToCart, cartItems} = useContext(ShopContext);
  return (
    <div className='container'>
        {
         products.map((product) => {
            const {id, image, name, price}= product;
            const cartItemAmount = cartItems[id];
            return (
                <div className="cards" key={id}>
                    <div className="image">
                        <img className="image" src={image} alt={name}></img>
                    </div>
                    <div className="details">
                        <h4>{name}</h4>
                        <p>${price}</p>
                    </div>
                    <button className="btn" onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
                </div>
            )
        })
        }
    </div>
  )
}

export default Home