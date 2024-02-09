import NavComponent from "./nav-component";
import React, { useEffect, useState } from "react";

const NavContainer = (props) => {
  
  //   const [menuItems, setMenuItems] = useState([]);

  // useEffect(() => {
  //   fetch("./responses/defaultNavLinks.json")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       // console.log("Ajax Response:", response);
  //       setMenuItems(response.data);
  //     });
      
  // }, []);

  // useEffect(() => {
  //   console.log("menuItems", menuItems);
  // }, [menuItems]);

  return <NavComponent {...props} />
};

export default NavContainer;



