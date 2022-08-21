import React from 'react';
import logo from './logo.svg';
import AppView from './App.view';
import { PackingApp } from 'components/PackingApp';
import Carousel from 'nuka-carousel';
import PackingBox from 'types/PackingBox';
import Recoil from 'recoil';

export default function App() {
  const [data, setData] = React.useState<PackingBox[]>([{size: '0', ppList: []}]);
  const [orderNumber, setOrderNumber] = React.useState('1');

  React.useEffect(() => {
    fetch('/eco/order/' + orderNumber)
      .then((val) => val.json())
      .then(x => {
        console.log(x.data);
        setData(x.data);
      });
  }, [orderNumber]);

  return (
    <Recoil.RecoilRoot>
      <div id='App'>
        <Carousel>
          {data.map(x => <AppView packingBox={x} onSearch={setOrderNumber}/>)}
        </Carousel>
      </div>
    </Recoil.RecoilRoot>
  );
}
