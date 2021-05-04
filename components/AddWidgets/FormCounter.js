import React, { useState } from 'react';
import Btn from '../Btn';
import { TextHeadWidget, TextError } from '../Modals/TextHead';

export default function FormCounter({
  onAdd
}) {
  const [checkError, setCheckError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (Number(e.target.title.value) < 1) {
      setCheckError('Please enter at least 0.');
      // console.log(e.target.count.value.length);
    } else {
      onAdd('counter', Number(e.target.title.value));
    }
  };

  return (
    <>
      <TextHeadWidget title='Add Counter' />
      <form onSubmit={onSubmit} className='flex'>
        <div className='flex-1 mr-1'>
          <input
            name='title'
            type='number'
            pattern='[0-9]'
            className='w-full px-2.5 py-1 focus:outline-none rounded-md'
            placeholder='Enter the initial value'
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
