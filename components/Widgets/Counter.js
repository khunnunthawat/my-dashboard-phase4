import React, { useState, useEffect } from 'react';
import { Card } from '../Layouts/Card';
import Btn from '../Btn';

export default function Counter({ title, list, setZero, zero, onClickDelete = () => {} }) {
  
  const [count, setCount] = useState(list.value);
 
  useEffect(() => {
    if (zero === 'Counter') {
      setCount(0);
      setZero('');
    }
  }, [zero]);

  const handleClick = function () {
    onClickDelete(list);
    
  };

  let clearCount;
  let decrease;

  let countCss = 'text-5xl rounded-full w-10 text-center focus:outline-none';
  let countBlue = 'text-blue-500';
  let countGray = 'text-gray-300';

  const handleClickCount = () => {
    setCount(0);
    console.log(handleClickCount);
  };

  if (count == 0) {
    clearCount = (
      <Btn
        onClick={handleClickCount}
        disabled={true}
        color='default'
        btnName='Set zero'
      />
    );
    decrease = <button className={`${countCss} + ${countGray}`}>-</button>;
  } else {
    clearCount = (
      <Btn
        onClick={handleClickCount}
        disabled={false}
        color='primary'
        btnName='Set zero'
      />
    );
    decrease = (
      <button
        onClick={() => setCount(list.value - 1)}
        className={`${countCss} + ${countBlue}`}
      >
        -
      </button>
    );
  }

  list.value = count;
  console.log(list.value);

  return (
    <Card title='Counter' key={list.id} onClickDelete={handleClick}>
      <div className='text-center'>
        <div className='flex items-center justify-center mt-4 mb-6'>
          {decrease}
          <div className='text-6xl mx-7'>{count}</div>
          <button
            onClick={() => setCount(list.value + 1)}
            className={`${countCss} + ${countBlue}`}
          >
            +
          </button>
        </div>
        {clearCount}
      </div>
    </Card>
  );
}