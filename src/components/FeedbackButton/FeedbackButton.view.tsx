import React from 'react';
import Box from '@mui/material/Box';
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
function FeedbackButtonView({ isOpen, isEnd, ppList, onEndClick, onOpen, onClose, onSubmit }: { isOpen: boolean, isEnd: boolean, ppList: PackingProduct[], onEndClick: React.MouseEventHandler, onOpen: React.MouseEventHandler, onClose: () => void, onSubmit: React.FormEventHandler<HTMLFormElement> }) {
  const endButtonStyle = isEnd ? '' : 'opacity-25';
  return (
    <div>
      <div className="inline-block">
        <button className={`bg-gradient-to-t from-blue-700 to-blue-400 hover:from-blue-600 hover:to-blue-300
       text-white font-bold w-full h-40 py-4 px-4 mb-5 rounded ${endButtonStyle}`} onClick={onEndClick}
        >
          포장 완료
        </button>
        <button className="bg-gradient-to-t from-rose-800 to-rose-600 hover:from-rose-700 hover:to-rose-300
       text-white font-bold w-full h-40 py-4 px-4 rounded" onClick={onOpen}>
          <p className="text-sm">포장 과정에 문제가 있나요?</p>
          피드백 전송
        </button>
      </div>
      <Modal
        id="defaultModal"
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            피드백
          </Typography> */}
          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white" id="modal-modal-title">
              피드백 전송
            </h3>
            <button type="button" onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form method="post" onSubmit={onSubmit}>
            <div className="pt-3 pb-6 space-y-6">
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {"상자 크기 피드백"}
                <BoxRadio />
              </Typography>
            </div>
            {ppList.map((x, i) => (<Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {`${i + 1} 번째 상품의 포장재 피드백`}
              <ProductRadio id={x.id} groupName={`${i + 1}-material`} />
            </Typography>))}
            {/* <button className="mt-2 border-2 rounded bg-pink-500" type='submit'>제출</button> */}
            <div className="flex items-center justify-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button data-modal-toggle="defaultModal" type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">제출</button>
              <button onClick={onClose} data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">취소</button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default React.memo(FeedbackButtonView);