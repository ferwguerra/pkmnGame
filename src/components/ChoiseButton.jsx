import React from "react";

const ChoiseButton = ({ onReady }) => {
    return (
        <input
            type="button"
            value="Elegir"
            onClick={() => {
                onReady();
            }}
        />
    );
};

export default ChoiseButton;
