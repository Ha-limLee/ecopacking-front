import React from "react";
import OrderInputView from "./OrderInput.view";

function OrderInput({onSearch}: {onSearch: (orderNumber: string) => void}) {
    const inputRef = React.useRef<HTMLInputElement>(null);
    // const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    //     setOrderNumber(e.currentTarget.value);
    // }

    return (
        <OrderInputView inputRef={inputRef} handleClick={e => inputRef.current ? onSearch(inputRef.current?.value) : { }}/>
    );
}

export default React.memo(OrderInput);

