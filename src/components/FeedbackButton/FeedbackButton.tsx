import * as React from 'react';
import FeedbackButtonView from './FeedbackButton.view';

export default function FeedbackButton({text}: {text: string, modalText: string}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  

    return (
      <FeedbackButtonView text={text} isOpen={open} materialCount={5} handleOpen={handleOpen} handleClose={handleClose}/>
    );
}