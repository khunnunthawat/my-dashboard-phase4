import React from 'react';
import { IoClose } from 'react-icons/io5';

export const ModalCard = ({ children, onCancel = () => {} }) => {
  return (
    <div className='fixed flex items-center justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50'>
      <div className='relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full'>
        <button
          className='absolute text-lg text-gray-600 top-4 right-4 focus:outline-none'
          onClick={function () {
            onCancel();
          }}
        >
          <IoClose />
        </button>
        {children}
      </div>
    </div>
  );
};