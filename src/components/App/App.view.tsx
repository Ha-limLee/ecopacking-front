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
            {/* <header className="bg-amber-400 p-5"> */}
            <header className="p-5">                
                <OrderInput onSearch={onSearch}/>
            </header>

            <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
                    <ItemTable items={packingBox.ppList}></ItemTable>
                </main>
                {/* side */}
                <aside className="flex justify-center self-center h-96 md:w-1/3 lg:w-1/4 px-5 py-5">
                    <h1 className="text-2xl md:text-4xl">
                        <FeedbackButton text="Feed-back" ppList={packingBox.ppList}></FeedbackButton>
                    </h1>
                </aside>
            </div>

            <footer className="mt-auto p-5 border-t border-gray-300">
                <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 return Kurly;. All Rights Reserved.</p>
            </footer>
        </body>
    );
}