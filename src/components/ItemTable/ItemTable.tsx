import ItemTableView from "./ItemTable.view"
import ModProduct from "types/ModProduct";

export default function ItemTable({items}: {items: ModProduct[]}) {
    return (
        <ItemTableView contents={items}/>
    );
}