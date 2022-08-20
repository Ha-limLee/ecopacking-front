import React from 'react';
import logo from './logo.svg';
import AppView from './App.view';
import { PackingApp } from 'components/PackingApp';
import Carousel from 'nuka-carousel';
import PackingBox from 'types/PackingBox';

export default function App() {
  const [data, setData] = React.useState<PackingBox[]>([]);
  const [orderNumber, setOrderNumber] = React.useState(0);

  React.useEffect(() => {
    fetch('/eco/order/1')
      .then((val) => val.json())
      .then(x => {
        console.log(x.data);
        setData(x.data);
      });
  }, []);

  return (
    <div id='App'>
      <Carousel>
        {data.map(x => <AppView packingBox={x} />)}
      </Carousel>
    </div>
  );
}
