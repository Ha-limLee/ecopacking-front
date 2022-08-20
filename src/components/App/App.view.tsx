import { ItemTable } from "components/ItemTable";
import { Layout } from "components/Layout";
import { FeedbackButton } from "components/FeedbackButton";
import PackingBox from "types/PackingBox";
import { OrderInput } from "components/OrderInput";
import React from "react";

export default function AppView({packingBox, onSearch}: {packingBox: PackingBox, onSearch: (orderNumber: string) => void}) {
    return (
        <body>
            {/* header */}
            <header className="bg-amber-400 p-5">
                <h1 className="text-2xl md:text-4xl">
                    <OrderInput onSearch={onSearch}/>
                </h1>
            </header>

            <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
                    <ItemTable items={packingBox.ppList}></ItemTable>
                </main>
                {/* side */}
                <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-40">
                    <h1 className="text-2xl md:text-4xl">
                        <FeedbackButton text="Feed-back" modalText="Hello World!"></FeedbackButton>
                    </h1>
                </aside>
            </div>

            <footer className="bg-slate-800 mt-auto p-5">
                <h1 className="text-2xl md:text-4xl text-white">Footer</h1>
            </footer>
        </body>
    );
}