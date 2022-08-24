import { ItemTable } from "components/ItemTable";
import { FeedbackButton } from "components/FeedbackButton";
import { BoxSizeLabel } from "components/BoxSizeLabel";
import ModBox from "types/ModBox";
import React from 'react';

function AppView({modBox}: {modBox: ModBox}) {
    return (
        <>
            <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
                    <BoxSizeLabel boxSize={modBox.size} texture={modBox.texture}/>
                    <ItemTable items={modBox.mpList}></ItemTable>
                </main>
                {/* side */}
                <aside className="flex justify-center self-center h-96 md:w-1/3 lg:w-1/4 px-5 py-5">
                    <h1 className="text-2xl md:text-4xl">
                        <FeedbackButton ppList={modBox.mpList}></FeedbackButton>
                    </h1>
                </aside>
            </div>

            <footer className="mt-auto p-5 border-t border-gray-300">
                <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 return Kurly;. All Rights Reserved.</p>
            </footer>
        </>
    );
}

export default React.memo(AppView);