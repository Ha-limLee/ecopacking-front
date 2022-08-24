import ModProduct from "types/ModProduct";
import ItemTableRowView from "./ItemTableRow.view";
import React from 'react';

function ItemTableView({contents}: {contents: ModProduct[]}) {
    return (
        <div className="h-full overflow-auto">
            <table className="border-collapse w-full">
                <thead>
                    <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-500 text-center border border-gray-300 hidden lg:table-cell">물품</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-500 text-center border border-gray-300 hidden lg:table-cell">포장재 종류</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-500 text-center border border-gray-300 hidden lg:table-cell">포장재 규격</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-500 text-center border border-gray-300 hidden lg:table-cell">개수</th>
                    </tr>
                </thead>
                <tbody>
                    {contents.map((content, i) => <ItemTableRowView key={i} tableItem={content}></ItemTableRowView>)}
                </tbody>
            </table>
        </div>
    );
}

export default React.memo(ItemTableView);