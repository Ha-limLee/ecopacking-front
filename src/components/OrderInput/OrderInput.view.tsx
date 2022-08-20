import React from "react";

export default function OrderInputView({handleChange, handleClick}: {handleChange: React.FormEventHandler<HTMLInputElement>, handleClick: React.MouseEventHandler}) {
    return (
        <>
        주문번호 <input onChange={handleChange}></input> <button onClick={handleClick}>조회</button>
        </>
    );
}