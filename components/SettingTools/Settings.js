import React, { useState } from 'react';
import { TextHead, TextHeadTable } from '../Modals/TextHead';
import SettingCard from './SettingCard';
import Btn from '../Btn';

export default function Settings({
  listAllWidgets,
  children,
  // setZero,
  // setTotaltime,
  totalTime,
  defaultValueShout,
  onEditJustShout,
  clearWidgets
}) {
  const [checkError, setCheckError] = useState('');

  const formatTime = (sec) => {
    const getSeconds = `0${sec % 60}`.slice(-2);
    const minutes = `${Math.floor(sec / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes} : ${getSeconds}`;
  };

  console.log(listAllWidgets);

  let totalWidgets = listAllWidgets.length;
  let totalJustSay = 0;
  let totalCounter = 0;
  let totalT = 0;
  
  var lowest = Number.POSITIVE_INFINITY;
  var highest = Number.NEGATIVE_INFINITY;
  let weatherCity = 'N/A';

  // CSS_className
  let inputClass = 'w-full px-2.5 py-1 border focus:outline-none rounded-md';

  let editJustShout = (
    <SettingCard title='JustShout text'>
      <fieldset disabled>
        <form className='flex'>
          <div className='flex-1 mr-1'>
            <input
              type='text'
              className={`${inputClass}`}
              placeholder='Enter text'
              defaultValue=''
            />
          </div>
          <Btn disabled={true} color='primary' btnName='Edit' />
        </form>
      </fieldset>
    </SettingCard>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    if (e.target.title.value.length < 3) {
      setCheckError('Please enter at least 3 characters.');
      // console.log(e.target.title.value.length);
    } else {
      onEditJustShout(e.target.title.value.trim()); // เราใช้เพียงคำสั่งนี้ ส่งข้อมูล type, value กลับไปยัง handleAdd ใน WidgetTools
    }
  };

  listAllWidgets.map((list) => {
    if (list.type === 'justSay' || list.type === 'justShout') {
      if (list.type === 'justShout' && list.value) {
        editJustShout = (
          <SettingCard title='JustShout text'>
            <fieldset>
              <form onSubmit={onSubmit} className='flex'>
                <div className='flex-1 mr-1'>
                  <input
                    name='title'
                    type='text'
                    className={`${inputClass}`}
                    placeholder='Enter text'
                    defaultValue={defaultValueShout}
                  />
                </div>
                <div>
                  <Btn disabled={false} color='primary' btnName='Edit' />
                </div>
              </form>
              <div className='text-red-600 text-xs mt-1'>{checkError}</div>
            </fieldset>
          </SettingCard>
        );
      }
      totalJustSay = totalJustSay + list.value.length;
    } else if (list.type === 'counter') {
      totalCounter = totalCounter + list.value;
    } else if (list.type === 'timer') {
      totalT = totalT + list.value;
    } else if (list.type === 'weather') {
      highest = `${parseInt(list.value.data.main.temp)}`;
      if (highest < lowest) {
        lowest = highest;
        weatherCity = list.value.data.name;
      }
    }
  });

  return (
    <>
      <TextHead>Settings</TextHead>
      <SettingCard title='Statistics'>
        <div className='table'>
          <TextHeadTable title='Total widgets: '>{totalWidgets}</TextHeadTable>
          <TextHeadTable title='Total Just length: '>
            {totalJustSay}
          </TextHeadTable>
          <TextHeadTable title='Total count: '>{totalCounter}</TextHeadTable>
          <TextHeadTable title='Total time: '>
            {totalT ? formatTime(totalT) : '00:00'}
          </TextHeadTable>
          <TextHeadTable title='Coldest cities: '>{weatherCity}</TextHeadTable>
        </div>
      </SettingCard>
      {editJustShout}
      {children}
      <SettingCard title='Delete Zone'>
        <Btn
          onClick={clearWidgets}
          color='btn-danger'
          btnName='Delete all widgets'
        />
      </SettingCard>
    </>
  );
}

// else if (list.type === 'weather') {
//       weatherCity = list.value.name;
//     }
