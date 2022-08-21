import * as React from 'react';
import FeedbackButtonView from './FeedbackButton.view';

/**
 * materialCount := 포장재를 사용하는 물품 개수
 */
export default function FeedbackButton({text, materialCount}: {text: string, materialCount: number}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <FeedbackButtonView text={text} isOpen={open} materialCount={materialCount} handleOpen={handleOpen} handleClose={handleClose}/>
    );
}