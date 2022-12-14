import React from "react";

function OrderInputView({inputRef, handleClick}: {inputRef: React.Ref<HTMLInputElement>, handleClick: React.MouseEventHandler}) {
    return (
        <div className="w-full px-3 mb-6 md:mb-0
         flex flex-no-wrap items-center
         border-b-2 border-black">

            <label className="block text-lg font-bold mr-6 mb-3" htmlFor="order-number">
                주문 번호
            </label>
            <input ref={inputRef} className="appearance-none block w-auto mr-4 text-gray-700
            border border-2 border-slate-200 rounded py-2 px-4 mb-3 focus:outline-none focus:bg-white focus:border-violet-500 placehoder-slate-400 shadow-sm"
                id="order-number" type="text" placeholder="12345678" />
            <button onClick={handleClick} className="h-fit bg-violet-800 hover:bg-violet-500 text-white font-bold py-2.5 px-4 mb-3 rounded">
                조회
            </button>

            {/* 로고 이미지 */}
            <div className="flex flex-nowrap items-center ml-auto">
            <img src="/kurly.jpg" className="w-16 h-10 mb-3 mr-3"></img>
            <img src="/logo.png" className="w-16 mb-3"></img></div>
        </div>
    );
}

export default React.memo(OrderInputView);
