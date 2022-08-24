import ItemTableView from "./ItemTable.view"
import ModProduct from "types/ModProduct";
import React from 'react';

function ItemTable({items}: {items: ModProduct[]}) {
    return (
        <ItemTableView contents={items}/>
    );
}

export default React.memo(ItemTable);