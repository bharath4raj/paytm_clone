import React, { useEffect, useState } from "react";
import BusinessHeaderComponent from "./business-header-component";

const BusinessHeaderContainer = () => {
    const [menuItems,setMenuItems] = useState([]);

    useEffect(() => {
        fetch("./responses/business-header-component.json")
          .then((res) => res.json())
          .then((response) => {
            console.log("Ajax Response:", response);
            setMenuItems(response.data);
          })
      }, []);
      console.log("Menu Items",menuItems)

    return <BusinessHeaderComponent menuItems={menuItems}/>
}
export default BusinessHeaderContainer;