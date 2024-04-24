import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import {ShopContextProvider} from "./context/ShopContext"

function App() {
  return (
    <div className="App">
     <ShopContextProvider>
       <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
     </Routes>
     </ShopContextProvider>
    </div>
  );
}

export default App;
