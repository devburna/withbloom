import { useLoadingContext } from "@/context/loading/loading.context";
import React from "react";

const Button = ({ id, text, type, style, onClick }: any) => {
    const { loading } = useLoadingContext();

    return (
        <button form={id} type={type} className={`btn fw-regular ${style}`} onClick={onClick} disabled={loading}>{loading ? 'Please wait...' : text}</button>
    );
};

export default Button;
