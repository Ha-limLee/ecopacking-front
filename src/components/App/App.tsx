import React from 'react';
import AppView from './App.view';
import Carousel from 'nuka-carousel';
import PackingBox from 'types/PackingBox';
import { useSetRecoilState } from 'recoil';
import { OrderInput } from 'components/OrderInput';
import ModBox from 'types/ModBox';
import ModProduct from 'types/ModProduct';
import PageNumberState from 'states/PageNumberState';

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
    modBoxList.push({size: packingBoxList[i].size, mpList: mpList});
  }
  return modBoxList;
}

export default function App() {
  const [data, setData] = React.useState<ModBox[]>([{size: '0', mpList: []}]);
  const setPageNumber = React.useCallback(useSetRecoilState(PageNumberState), []);

  const onSearch = (orderNumber: string) => {
    fetch('/eco/order/' + orderNumber)
        .then((val) => val.json())
        .then(x => {
            const modBoxList = convert(x.data as PackingBox[]);
            setData(modBoxList);
        });
  }

  return (
      <div id='App'>
        <header className="p-5">                
            <OrderInput onSearch={onSearch}/>
        </header>
        <Carousel afterSlide={setPageNumber}>
          {data.map(x => <AppView modBox={x} />)}
        </Carousel>
      </div>
  );
}
