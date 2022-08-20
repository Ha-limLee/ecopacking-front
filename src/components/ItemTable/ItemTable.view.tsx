import PackingProduct from "types/PackingProduct";
import ItemTableRowView from "./ItemTableRow.view";

export default function ItemTableView({contents}: {contents: PackingProduct[]}) {
    return (
<table className="border-collapse w-full">
    <thead>
        <tr>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">물품</th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">포장재 종류</th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">포장재 길이</th>
        </tr>
    </thead>
    <tbody>
        {contents.map(content => <ItemTableRowView tableItem={content}></ItemTableRowView>)}
    </tbody>
</table>
    );
}