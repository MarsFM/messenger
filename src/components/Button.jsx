import React from "react";

const Button = ({handleSendMessage}) => {

    return (
        <>
            <button onClick={handleSendMessage()}>Отправить</button>
        </>
    );
};

export default Button;