import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = ({ clickEventHandler, text, variant }) => {
    return (
        <Button color="primary" variant={variant} onClick={clickEventHandler}>
            {text}
        </Button>
    );
};

export default ButtonComponent;