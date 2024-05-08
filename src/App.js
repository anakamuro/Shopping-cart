import './App.css';
import {Route, Routes} from "react-router-dom";
import {useState} from "react"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
// import {ShopContextProvider} from "./context/ShopContext"
import {products} from "./products";

function App() {
  const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        const exist = cartItems.find((x) =>  x.id === product.id);
        if(exist){
            const newCartItems = 
              cartItems.map((x) => x.id === product.id ? {...exist, quantity : exist.quantity + 1} : x
            );
            setCartItems(newCartItems);
           } else {
            const newCartItems = [...cartItems, {...product,  quantity: 1}]
            setCartItems(newCartItems)
        }
    }

  // const addToCart = (product)=> {
  //   let newCart = [...cartItems];
  //   let itemInCart = cartItems.find(
  //     (item) => product.name === item.name
  //   );
  //   if(itemInCart){
  //     itemInCart.quantity++;
  //   } else {
  //     itemInCart = {
  //       ...product, quantity: 1,
  //     }
  //     newCart.push(itemInCart)
  //   }
  //   setCartItems([...cartItems, {...product}])
  // }
    // const addToCart = (product) => {
    //   // const {quantity} = cartItems.quantity;
    //   const newProduct = {
    //     ...product, 
    //     quantity: quantity + 1, 
    //   }
    //   setCartItems([...cartItems, newProduct])
    // }
    const removeToCart = (product) => {
      const exist = cartItems.find((x) =>  x.id === product.id);
        if(exist.quantity  === 1){
            const newCartItems = cartItems.filter((x) => x.id !== product.id);
            setCartItems(newCartItems);
           } else {
            const newCartItems = 
              cartItems.map((x) => 
              x.id === product.id ? {...exist, quantity : exist.quantity  - 1 } : x
            )
            setCartItems(newCartItems)
        }
      
    }
    // const removeToCart = (product) => {
    //   // const {quantity} = cartItems.quantity;
    //   const newProduct = {
    //     ...product, 
    //     quantity: quantity - 1, 
    //   }
    //   setCartItems([...cartItems, newProduct])
    // }
    // const removeToCart = (product) => {
    // const results = cartItems.filter(item => item !== product)
    // setCartItems(results)
    // }
  return (
    <div className="App">
       <Navbar countCartItems={cartItems.length} cartItems={cartItems} />
     <Routes>
        <Route path="/" element={<Home addToCart={addToCart} removeToCart={removeToCart} setCartItems={setCartItems} products={products}/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} addToCart={addToCart} removeToCart={removeToCart} />}/>
     </Routes>
    </div>
  );
}

export default App;
