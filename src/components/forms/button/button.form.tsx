import React from "react";

const Button = ({ id, text, type, style, onClick }: any) => {
    return (
        <button form={id} type={type} className={`btn fw-regular ${style}`} onClick={onClick}>{text}</button>
    );
};

export default Button;
