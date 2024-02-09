import { Link } from "react-router-dom";
import React from "react";

const NavComponent = ({ menuItems }) => {
    // console.log("menuItems", menuItems);
    return <nav className="nav">
        { menuItems.length === 0 && "Loading..."}
        <ul className="flex nav-links">
            {
               menuItems && 
               menuItems.length > 0 && 
               menuItems.map((item) => {    
                    const template = () =>{
                        if(item === "Paytm for Business"){
                            return  <Link to="/business">{item}</Link>
                        }else{
                            return item;
                        }
                    }
                    return <li>{template()}</li>
                })  
            }
        </ul>
    </nav>
}
export default NavComponent;