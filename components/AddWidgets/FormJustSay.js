import React, { useState } from 'react';
import Btn from '../Btn';
import { TextHeadWidget, TextError } from '../Modals/TextHead';

export default function FormJustSay({ onAdd }) {
  const [checkError, setCheckError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (e.target.title.value.trim().length < 3) {
      setCheckError('Please enter at least 3 characters.');
      // console.log(e.target.title.value.length);
    } else {
      onAdd('justSay', e.target.title.value.trim());
    }
  };

  return (
    <>
      <TextHeadWidget title='Add JustSay' />
      <form onSubmit={onSubmit} className='flex'>
        <div className='flex-1 mr-1'>
          <input
            name='title'
            type='text'
            className='w-full px-2.5 py-1 focus:outline-none rounded-md'
            placeholder='Enter text'
          />
        </div>
        <div>
          <Btn color='primary'> Add</Btn>
        </div>
      </form>
      <TextError>{checkError}</TextError>
    </>
  );
}
