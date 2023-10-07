import React, { useState } from "react";

const Dropdown = ({ options, onSelect, placeholder, style }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionClick = (option: any) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button
                className={`form-control shadow-none fw-regular text-start lh-lg p-3 px-4 text-${selectedOption ? '' : 'muted'} ${style}`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded={isOpen}
                id="dismiss"
            >
                {selectedOption || placeholder}
            </button>
            <ul className="dropdown-menu lh-lg w-100 py-0" style={{ height: 300, overflow: "scroll" }}>
                {options.map((option: any) => (
                    <li key={option}>
                        <button
                            type="button"
                            className="dropdown-item fw-regular py-2 small"
                            onClick={() => {
                                handleOptionClick(option);
                                document.getElementById('dismiss')?.click();
                            }}
                        >
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
