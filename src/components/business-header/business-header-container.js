import React, { useEffect, useState } from "react";
import BusinessHeaderComponent from "./business-header-component";

const BusinessHeaderContainer = () => {
    const [menuItems,setMenuItems] = useState([]);

    useEffect(() => {
        fetch("/responses/defaultNavLinks.json")
          .then((res) => res.json())
          .then((response) => {
            console.log("Ajax Response:", response);
            setMenuItems(response.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
    
      useEffect(() => {
        console.log("menuItems", menuItems);
      }, []);

    return <BusinessHeaderComponent menuItems={menuItems}/>
}
export default BusinessHeaderContainer;