import React from 'react';
import ProductRadioView from './ProductRadio.view';
import PackingProductState from 'states/PackingProductState';
import { useRecoilState } from 'recoil';

function ProductRadio({id, groupName}: {id: string, groupName: string}) {
    // group := 상자 혹은 포장재
    // value := 피드백 옵션 (-2, -1, 0, 1, 2)
    // (-2, -1, 0, 1, 2) := (매우 작다, 작다, 보통, 크다, 매우 크다)

    const [packingProduct, setPackingProduct] = useRecoilState(PackingProductState);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        // const state = {group: e.currentTarget.name, value: e.currentTarget.value};
        setPackingProduct(x => {
            return {
                ...x,
                [id]: e.currentTarget.value
            };
        });
    };

    return (
        <ProductRadioView groupName={groupName} handleChange={handleChange}/>
    );
}

export default React.memo(ProductRadio);