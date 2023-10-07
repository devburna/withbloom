import React from "react";

const Label = ({ id, text }: any) => {
    return (
        <label htmlFor={id} className="fw-regular small mb-2">{text}</label>
    );
};

export default Label;
