import { ItemTable } from "components/ItemTable";
import { Layout } from "components/Layout";
import { FeedbackButton } from "components/FeedbackButton";
import PackingBox from "types/PackingBox";

export default function AppView({packingBox}: {packingBox: PackingBox}) {
    return (
        <body>
            <header className="p-5">
                <OrderNumber></OrderNumber>
            </header>

            <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
                    <ItemTable items={packingBox.ppList}></ItemTable>
                </main>
                {/* side */}
                <aside className="h-96 md:w-1/3 lg:w-1/4 px-5 py-5">
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