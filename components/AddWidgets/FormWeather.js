import React, { useState } from 'react';
import Btn from '../Btn';
import { TextHeadWidget, TextError } from '../Modals/TextHead';
import axios from 'axios';

export default function FormJustSay({ onAdd }) {
  const [checkError, setCheckError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const value = e.target.title.value;
    let key = '2c486a422a8abed95fca0bbd2c35fc80';

    if (e.target.title.value.length < 3) {
      setCheckError('Please enter at least 3 characters.');
    } else {
      // API_Weather
      try {
        const url =
          'https://api.openweathermap.org/data/2.5/weather?q=' +
          value +
          '&appid=' +
          key
          ;
        
        const data = await axios.get(url);

        console.log('weatherCity : ' + value);
        console.log(data);

        onAdd('weather', data);
      } catch {
        onAdd('weatherNone', e.target.title.value);
        console.log('City not found !');
      }
    }
  };

  return (
    <>
      <TextHeadWidget title='Add Weather' />
      <form onSubmit={onSubmit} className='flex'>
        <div className='flex-1 mr-1'>
          <input
            name='title'
            type='text'
            className='w-full px-2.5 py-1 focus:outline-none rounded-md'
            placeholder='Enter a city'
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
