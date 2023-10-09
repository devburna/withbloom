import React from "react";

const Label = ({ htmlFor, text }: any) => {
    return (
        <label htmlFor={htmlFor} className="fw-regular small mb-2">{text}</label>
    );
};

export default Label;
