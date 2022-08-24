import PackingProduct from './PackingProduct';

type PackingBox = {
    "size": string,
    "texture": string,
    "ppList": PackingProduct[]
};

export default PackingBox;