import React, { useEffect, useState } from "react";
import DefaultHeaderComponent from "./default-header-component";

const DefaultHeaderContainer = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("/responses/defaultNavLinks.json");
            const data = await response.json();
            console.log("Ajax Response:", data);
            setMenuItems(data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
}, []);

  useEffect(() => {
    console.log("menuItems", menuItems);
  }, [menuItems]);

  return <DefaultHeaderComponent menuItems={menuItems} />
}
export default DefaultHeaderContainer;


