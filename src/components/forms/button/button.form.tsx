import React from 'react';
import { useLoadingContext } from '../../../context/loading/loading.context';

const Button = ({ form, id, text, type, className, onClick }: any) => {
    const { loading } = useLoadingContext();

    return (
        <button
            form={form}
            type={type}
            className={`btn fw-regular ${className}`}
            onClick={onClick}
            disabled={loading}
            data-testid={id}
        >
            {loading ? 'Please wait...' : text}
        </button>
    );
};

export default Button;
