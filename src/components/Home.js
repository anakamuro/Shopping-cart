import React from 'react';
import '../App.css';

function Home({addToCart, removeToCart, products}) {
  return (
    <div className='container'>
        {products.map((product) => (
            // const {id, image, name, price}= product;
                <div className="cards" key={product.id}>
                    <div className="image">
                        <img className="image" src={product.image} alt={product.name}></img>
                    </div>
                    <div className="details">
                        <h4>{product.name}</h4>
                        <p>${product.price}</p>
                        <p>{product.length}</p>
                    </div>
                    <button className="btn" onClick={() => addToCart(product)}>Add To Cart</button>
                    <button className="btn" onClick={() => removeToCart(product)}>Remove To Cart</button>
                </div>
         ))}
    </div>
  )
}

export default Home