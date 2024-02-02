import NavComponent from "./nav-component";
import React, { useEffect, useState } from "react";

const NavContainer = (props) => {
  
  // console.log(props)
  return <NavComponent {...props} />
};

export default NavContainer;


  // const [menuItems, setMenuItems] = useState([]);

  // useEffect(() => {
  //   fetch("./responses/defaultNavLinks.json")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log("Ajax Response:", response);
  //       setMenuItems(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   console.log("menuItems", menuItems);
  // }, [menuItems]);