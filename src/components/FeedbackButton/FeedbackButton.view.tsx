import React from 'react';
import ReactDom from 'react-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BoxRadio, ProductRadio } from 'components/Radios';
import PackingProduct from 'types/PackingProduct';

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

/**
 * materialCount := 포장재 수
 */
export default function FeedbackButtonView({text, isOpen, ppList, handleOpen, handleClose, handleSubmit}: {text: string, isOpen: boolean, ppList: PackingProduct[], handleOpen: () => void, handleClose: () => void, handleSubmit: React.FormEventHandler<HTMLFormElement>}) {
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
          <form method="post" onSubmit={handleSubmit}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {"상자 크기 피드백"}
            <BoxRadio/>
          </Typography>
            {ppList.map((x, i) => ( <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                      {`${i + 1} 번째 상품의 포장재 피드백`}
                                      <ProductRadio id={x.id} groupName={`${i + 1}-material`}/>
                                    </Typography> ))}
            <button className="mt-2 border-2 rounded bg-pink-500" type='submit'>제출</button>
          </form>
        </Box>
      </Modal>  
    </div>
    );
}