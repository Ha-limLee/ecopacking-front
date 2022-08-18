import ItemTableView from "./ItemTable.view"
import TableItem from "types/TableItem";

export default function ItemTable() {
    const items: TableItem[] = [
        {item: '샐러드', material: '종이', length: 13},
        {item: '고기', material: '완충재', length: 10},
        {item: '고기', material: '완충재', length: 10},
        {item: '고기', material: '완충재', length: 10},
        {item: '고기', material: '완충재', length: 10},
        {item: '고기', material: '완충재', length: 10}
    ];
    return (
        <ItemTableView contents={items}/>
    );
}