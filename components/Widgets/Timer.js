import React, { useState, useEffect } from 'react';
import { Card } from '../Layouts/Card';
import Btn from '../Btn';

export default function TimerTest({
  title,
  list,
  setZero,
  zero,
  listAllWidgets,
  setTotaltime,
  totalTime,
  onClickEdit,
  onClickDelete = () => {},
}) {
  const [timer, setTimer] = useState(list.value || 0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  // const countRef = useRef(null);

  useEffect(() => {
    if (zero === 'Timer') {
      setTimer(0);
      setZero('');
      setIsActive(false);
    }
  }, [zero]);

  useEffect(() => {
    onClickEdit(list.id, timer)
  }, [timer]);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const handleClick = function () {
    onClickDelete(list);
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    // console.log(handleStart);
  };

  const handlePause = () => {
    setIsActive(false);
    setIsPaused(false);
    // console.log(handlePause);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
    // console.log(handleReset);
  };

  const formatTime = (sec) => {
    const getSeconds = `0${sec % 60}`.slice(-2);
    const minutes = `${Math.floor(sec / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes} : ${getSeconds}`;
  };

  list.value = timer;
  // console.log(list.value);

  return (
    <Card title='Timer' onClickDelete={handleClick}>
      <div className='text-center space-x-1'>
        <div className='flex items-center justify-center mt-4 mb-6'>
          <div className='text-6xl mx-7'>{formatTime(timer)}</div>
        </div>
        <>
          {!isActive && (
            <Btn
              onClick={handleStart}
              disabled={false}
              btnName='Start'
              color='primary'
            />
          )}
          {isActive && (
            <Btn
              onClick={handlePause}
              disabled={false}
              btnName='Pause'
              color='primary'
            />
          )}
          {!isActive && timer == 0 && (
            <Btn
              onClick={handleReset}
              disabled={true}
              btnName='Reset'
              color='primary'
            />
          )}
          {isActive && (
            <Btn
              onClick={handleReset}
              disabled={false}
              btnName='Reset'
              color='primary'
            />
          )}
          {!isActive && timer > 0 && (
            <Btn
              onClick={handleReset}
              disabled={false}
              btnName='Reset'
              color='primary'
            />
          )}
        </>
      </div>
    </Card>
  );
}
