import React from 'react';
import AppView from './App.view';
import Carousel from 'nuka-carousel';
import PackingBox from 'types/PackingBox';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { OrderInput } from 'components/OrderInput';
import ModBox from 'types/ModBox';
import ModProduct from 'types/ModProduct';
import TotalPageNumberState from 'states/TotalPageNumberState';
import CurrentPageNumberState from 'states/CurrentPageNumberState';
import OrderNumberState from 'states/OrderNumberState';

function convert(packingBoxList: PackingBox[]): ModBox[] {
  const modBoxList: ModBox[] = [];
  for (let i = 0; i < packingBoxList.length; i++) {
    const list = packingBoxList[i].ppList;
    const dict: {[id: string]: ModProduct} = {};
    for (const x of list) {
      if (dict[x.id]) {
        dict[x.id].count += 1;
      } else {
        let value = x.length;
        let unit = '';
        if (x.material === '종이포장') {
          value = parseFloat(value).toFixed(2);
          unit = 'cm';
        } else if (x.material === '아이스팩') {
          value = value.split('.')[0];
          unit = '개'
        }
        dict[x.id] = {...x, length: value + unit, count: 1};
      }
    }
    const mpList: ModProduct[] = [];
    for (const key in dict) {
      mpList.push(dict[key]);
    }
    const {size, texture} = packingBoxList[i];
    modBoxList.push({size: size, texture: texture, mpList: mpList});
  }
  return modBoxList;
}

function App() {
  const [data, setData] = React.useState<ModBox[]>([{size: '', texture: '', mpList: []}]);
  const setTotalPageNumber = useSetRecoilState(TotalPageNumberState);
  const [currentPageNumber, setCurrentPageNumber] = useRecoilState(CurrentPageNumberState);
  const setOrderNumber = useSetRecoilState(OrderNumberState);
  const [slideIndex, setSlideIndex] = React.useState(0);

  const onSearch = (orderNumber: string) => {
    fetch('/eco/order/' + orderNumber)
        .then((val) => val.json())
        .then(x => {
            const modBoxList = convert(x.data as PackingBox[]);
            setData(modBoxList);
            setTotalPageNumber(modBoxList.length);
            setOrderNumber(orderNumber);

            // make Carousel move to index 0
            // when search button clicked.
            setSlideIndex(1);
            setTimeout(() => setSlideIndex(0));
        });
  }

  return (
      <div id='App'>
        <header className="p-5">                
            <OrderInput onSearch={onSearch}/>
        </header>
        <Carousel afterSlide={setCurrentPageNumber} slideIndex={slideIndex}>
          {data.map((x, i) => <AppView key={i} modBox={x} />)}
        </Carousel>
      </div>
  );
}

export default React.memo(App);