import ItemTableView from "./ItemTable.view"
import PackingProduct from "types/PackingProduct";

export default function ItemTable({items}: {items: PackingProduct[]}) {
    return (
        <ItemTableView contents={items}/>
    );
}