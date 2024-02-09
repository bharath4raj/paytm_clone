import React from "react";
import ButtonComponent from "./ButtonComponent";

const ButtonContainer = () => {
    // Define click event handler function
    const handleClick = () => {
        console.log("Button clicked!");
    };

    return (
        <div>
            <ButtonComponent
                text="Click Me"
                variant="primary"
                clickEventHandler={handleClick}
            />
        </div>
    );
};

export default ButtonContainer;