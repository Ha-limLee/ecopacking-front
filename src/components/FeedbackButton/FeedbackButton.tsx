import * as React from 'react';
import FeedbackButtonView from './FeedbackButton.view';
import PackingProduct from 'types/PackingProduct';
import BoxState from 'states/BoxState';
import PackingProductState from 'states/PackingProductState';
import { useRecoilState } from 'recoil';
import { Product } from 'states/PackingProductState';

/**
 * materialCount := 포장재를 사용하는 물품 개수
 */
export default function FeedbackButton({text, ppList}: {text: string, ppList: PackingProduct[]}) {
  const [open, setOpen] = React.useState(false);
  const [boxState, setBoxState] = useRecoilState(BoxState);
  const [packingProductState, setPackingProductState] = useRecoilState(PackingProductState);
  
  const handleOpen = () => {
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

  return (
    <FeedbackButtonView text={text} isOpen={open} ppList={ppList} handleOpen={handleOpen} handleClose={handleClose} handleSubmit={handleSubmit}/>
  );
}