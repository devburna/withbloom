import React from "react";

const Input = ({ id, value, onChange, type, inputMode, name, style, placeholder, min, readOnly, required }: any) => {
    return (
        <input
            id={id}
            type={type}
            inputMode={inputMode}
            className={`form-control shadow-none lh-lg ${style}`}
            placeholder={placeholder}
            min={min}
            name={name}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            required={required}
        />
    );
};

export default Input;
