import * as React from 'react';
import FeedbackButtonView from './FeedbackButton.view';
import PackingProduct from 'types/PackingProduct';
import BoxState from 'states/BoxState';
import PackingProductState from 'states/PackingProductState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Product } from 'states/PackingProductState';
import PageNumberState from 'states/PageNumberState';
import OrderNumberState from 'states/OrderNumberState';

function FeedbackButton({ppList}: {ppList: PackingProduct[]}) {
  const [open, setOpen] = React.useState(false);
  const [boxState, setBoxState] = useRecoilState(BoxState);
  const [packingProductState, setPackingProductState] = useRecoilState(PackingProductState);

  const pageNumber = useRecoilValue(PageNumberState);
  const orderNumber = useRecoilValue(OrderNumberState);
  const totalNumber = ppList.length;
  const end = (pageNumber === totalNumber - 1) ? true : false;

  const handleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    // init states
    setBoxState("0");
    setPackingProductState(ppList.map(val => val.id)
                                .reduce((prev, curr) => {prev[curr] = "0"; return prev;}, {} as Product));
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Object.entries
    const mats = Object.entries(packingProductState).map(([key, value]) => {
      return {
        "id": key,
        "materialFeedback": value
      };
    });

    fetch('/eco/feedback', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "boxFeedback": boxState,
        "materials": mats
      })
    });
  };

  function handleEndClick(e: React.MouseEvent) {
    e.preventDefault();
    fetch('/eco/order', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "orderId" : orderNumber
      })
    });
  }

  return (
    <FeedbackButtonView isOpen={open} isEnd={end} ppList={ppList} onEndClick={handleEndClick} onOpen={handleOpen} onClose={handleClose} onSubmit={handleSubmit}/>
  );
}

export default React.memo(FeedbackButton);