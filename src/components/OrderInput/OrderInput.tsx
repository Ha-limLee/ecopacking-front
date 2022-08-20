import React from "react";
import OrderInputView from "./OrderInput.view";

export default function OrderInput({onSearch}: {onSearch: (orderNumber: string) => void}) {
    const [orderNumber, setOrderNumber] = React.useState('');
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setOrderNumber(e.currentTarget.value);
    }

    return (
        <OrderInputView handleChange={handleChange} handleClick={e => onSearch(orderNumber)}/>
    );
}