import React from 'react';
import {NavLink} from "react-router-dom";
import "./Navbar.css";


function Navbar(props) {
  const {countCartItems} = props;
  return (
    <nav>
        <div>
        <ul>
            <li>
                <NavLink to="/">   <img src="https://th.bing.com/th?id=OIP.tu5yvoyO5oYFWYzLVOf-BwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="icon"/></NavLink>
            </li>
            <li>
              {countCartItems > 0 &&
                <NavLink to="/cart"><i className="fa-solid fa-cart-shopping"></i>{countCartItems}</NavLink>
               }
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar