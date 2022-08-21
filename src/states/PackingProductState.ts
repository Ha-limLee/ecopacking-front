import {atom} from 'recoil';

export type Product = {
    [id: string]: string // 품목 ID: 포장재 피드백(x in [-2, -1, 0, 1, 2])
};

export default atom<Product>({
    key: 'PackingProductState',
    default: {}
});