import React from 'react';
import ReactDom from 'react-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FeedbackRadio } from 'components/FeedbackRadio';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 470,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function createRadio({text, groupName}: {text: string, groupName: string}) {
  return (
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {text}
      <FeedbackRadio groupName={groupName}></FeedbackRadio>
    </Typography>
  );
}

/**
 * materialCount := 포장재 수
 */
export default function FeedbackButtonView({text, isOpen, materialCount, handleOpen, handleClose}: {text: string, isOpen: boolean, materialCount: number, handleOpen: () => void, handleClose: () => void}) {
    return (
      <div>
      <button className='bg-teal-300 rounded-md p-2' onClick={handleOpen}>{text}</button>
      {/*<Button className='bg-gray-900' onClick={handleOpen}>{text}</Button>*/}
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            피드백
          </Typography>
          <form method="put" >
            {createRadio({text: "상자 크기 피드백", groupName: "box"})}
            {Array.from(new Array(materialCount), (__, i) => i).map(i => createRadio({text: `${i + 1} 번 포장재 피드백`, groupName: `${i + 1}-material`}))}
          </form>
        </Box>
      </Modal>  
    </div>
    );
}