import React, { useState } from 'react';
import { CardEditRefresh } from '../Layouts/Card';
import EditForm from '../AddWidgets/EditForm';
import { ModalCard } from '../Modals/ModalCard';
import axios from 'axios';

export default function Weather({ list, onClickEditWeather, onClickDelete }) {
  const [modalActiveEditWeather, setModalActiveEditWeather] = useState(false);

  // log_data_list
  // console.log(list);

  let dataCity;
  let dataWeather;
  let dataTemp;

  // CSS_className
  let nameClass = 'text-xl font-bold capitalize';
  let tempClassNone = 'text-red-500 mt-1 text-5xl font-extralight';
  let tempClass = 'text-gray-500 mt-1 text-5xl font-extralight';

  if (list.type === 'weatherNone') {
    dataCity = <h3 className={`${nameClass} + text-red-600`}>{list.value}</h3>;
    dataWeather = (
      <h4 className='text-red-400 -mt-1'>
        <span className='align-middle'>City not found</span>
      </h4>
    );
    dataTemp = <h2 className={`${tempClassNone}`}>--</h2>;
  } else {
    dataCity = <h3 className={`${nameClass}`}>{list.value.data.name}</h3>;
    dataWeather = (
      <h4 className='text-gray-400 -mt-1 flex justify-center items-center'>
        <img
          className='h-10 w-10'
          src={`http://openweathermap.org/img/wn/${list.value.data.weather[0].icon}@2x.png`}
          alt='logo'
        />
        {/* <i className='align-middle text-2xl mr-1.5 owi'>
          {list.value.data.weather[0].icon}
        </i> */}
        <span className='align-middle'>
          {list.value.data.weather[0].description}
        </span>
      </h4>
    );
    dataTemp = (
      <h2 className={`${tempClass}`}>{`${parseInt(
        list.value.data.main.temp - 273
      )}°`}</h2>
    );
  }

  const handleCancel = function () {
    setModalActiveEditWeather(false);
  };

  const handleClick = function () {
    onClickDelete(list);
  };

  const handleClickEdit = function () {
    setModalActiveEditWeather(true);
  };

  const onEditSubmit = async (id, type, name) => {
    let key = '2c486a422a8abed95fca0bbd2c35fc80';
    try {
      const url =
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        name +
        '&appid=' +
        key;

      const data = await axios.get(url);

      onClickEditWeather(id, 'weather', data);
    } catch {
      onClickEditWeather(id, 'weatherNone', name);
    }
    // onClickEdit(id, content);
    setModalActiveEditWeather(false);
  };

  const onEditRefresh = async () => {
    console.log('CardEditRefresh');
    let key = '2c486a422a8abed95fca0bbd2c35fc80';
    try {
      const url =
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        list.value.data.name +
        '&appid=' +
        key;

      const data = await axios.get(url);

      onClickEditWeather(list.id, 'weather', data);
    } catch {
      onClickEditWeather(list.id, 'weatherNone', list.value.data.name);
    }
    // onClickEdit(id, content);
    setModalActiveEditWeather(false);
  };
  

  return (
    <>
      {modalActiveEditWeather && (
        <ModalCard onCancel={handleCancel}>
          <EditForm title='Weather' onEditSubmit={onEditSubmit} list={list} />
        </ModalCard>
      )}
      <CardEditRefresh
        title='Weather'
        key={list.id}
        onClickDelete={handleClick}
        onClickEdit={handleClickEdit}
        onClickRefresh={onEditRefresh}
        list={list}
      >
        <div className='text-center'>
          {dataCity}
          {dataWeather}
          {dataTemp}
        </div>
        <div className='text-xs text-gray-400'>
          <div className='mt-6 -mb-2 text-center'>{list.date}</div>
        </div>
      </CardEditRefresh>
    </>
  );
}

{
  /* <div className='text-center'>
  <h3 className='text-xl font-bold capitalize'>{list.value.data.name}</h3>
  <h4 className='text-gray-400 -mt-1 flex justify-center items-center'>
    <i className='align-middle text-2xl mr-1.5 owi' />
    <img
      className='h-10 w-10'
      src={`http://openweathermap.org/img/wn/${list.value.data.weather[0].icon}@2x.png`}
      alt='logo'
    />
    <span className='align-middle'>
      {list.value.data.weather[0].description}
    </span>
  </h4>
  <h2 className='text-gray-500 mt-1 text-5xl font-extralight'>{`${temp}°`}</h2>
</div> */
}
