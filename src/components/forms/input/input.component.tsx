import React from "react";

const Input = ({ form, id, value, onChange, type, inputMode, name, className, placeholder, min, readOnly, required }: any) => {
    return (
        <input
            form={form}
            id={id}
            type={type}
            inputMode={inputMode}
            className={`form-control shadow-none lh-lg ${className}`}
            placeholder={placeholder}
            min={min}
            name={name}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            required={required}
            data-testid={id}
        />
    );
};

export default Input;
