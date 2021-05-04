import React, { useState, useEffect } from 'react';
import Btn from '../Btn';

// icon
import {
  RiAddCircleLine,
  RiIncreaseDecreaseLine,
  RiSettings3Line,
  RiCameraLensFill
} from 'react-icons/ri';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoTimerOutline } from 'react-icons/io5';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { TiWeatherPartlySunny } from 'react-icons/ti';

// Form_Input
import FormJustSay from '../AddWidgets/FormJustSay';
import FormJustShout from '../AddWidgets/FormJustShout';
import FormCounter from '../AddWidgets/FormCounter';
import FormWeather from '../AddWidgets/FormWeather';

// Layout_Card
import { ModalCard } from '../Modals/ModalCard';
import { TextHead } from '../Modals/TextHead';
import WidgetMenuCard from './WidgetMenuCard';

// Widgets_Card
import JustSay from './JustSay';
import JustShout from './JustShout';
import Counter from './Counter';
import Timer from './Timer';
import Weather from './Weather';
import PhotoApi from './PhotoApi';

// Settings
import SettingCard from '../SettingTools/SettingCard';
import Settings from '../SettingTools/Settings';

export default function WidgetContent() {
  // Set_Menu
  const [modalActiveMenu, setModalActiveMenu] = useState(false);

  // Set_Modal_Wedgets
  const [modalActiveJustsay, setModalActiveJustsay] = useState(false);
  const [modalActiveJustShout, setModalActiveJustShout] = useState(false);
  const [modalActiveCounter, setModalActiveCounter] = useState(false);
  const [modalActiveWeather, setModalActiveWeather] = useState(false);
  const [modalActivePhoto, setModalActivePhoto] = useState(false);

  const [defaultValueShout, setDefaultValueShout] = useState([]);

  // Set_Settings
  const [modalActiveSetting, setModalActiveSetting] = useState(false);

  // Zero_Timer_Counter
  const [zero, setZero] = useState('');
  const [totalTime, setTotaltime] = useState('');

  // List_All_Widgets
  const [listAllWidgets, setListAllWidgets] = useState([]);

  // LocalStorage
  useEffect(() => {
    saveLocalStorage();
  }, []);

  useEffect(() => {
    console.log(listAllWidgets);
    localStorage.setItem('listAllWidgets', JSON.stringify(listAllWidgets)); //save local storage
    localStorage.setItem('defaultValueShout', JSON.stringify(defaultValueShout));
  }, [listAllWidgets]);

  const saveLocalStorage = () => {
    if (localStorage.getItem('listAllWidgets') === null || localStorage.getItem('defaultValueShout') === null) {
      localStorage.setItem('listAllWidgets', JSON.stringify([]));
      localStorage.setItem('defaultValueShout', JSON.stringify([]));
    } else {
      let listLocalStorage = JSON.parse(localStorage.getItem('listAllWidgets'));
      let defaultLocalStorage = JSON.parse(localStorage.getItem('defaultValueShout'));
      setListAllWidgets(listLocalStorage);
      setDefaultValueShout(defaultLocalStorage);
    }
    // console.log(listAllWidgets);
  };

  const handleClickMenu = function () {
    setModalActiveMenu(true);
  };

  const handleClickJustsay = function () {
    setModalActiveMenu(false);
    setModalActiveJustsay(true);
  };

  const handleClickJustShout = function () {
    setModalActiveMenu(false);
    setModalActiveJustShout(true);
  };

  const handleClickCounter = function () {
    setModalActiveMenu(false);
    setModalActiveCounter(true);
  };

  const handleClickWeather = function () {
    setModalActiveMenu(false);
    setModalActiveWeather(true);
  };

  const handleClickPhoto = function () {
    setModalActiveMenu(false);
    setModalActivePhoto(true);
  };

  const handleClickSetting = function () {
    setModalActiveSetting(true);
  };

  const handleCancel = function () {
    setModalActiveMenu(false);
    setModalActiveJustsay(false);
    setModalActiveJustShout(false);
    setModalActiveCounter(false);
    setModalActiveWeather(false);
    setModalActivePhoto(false);
    setModalActiveSetting(false);
  };

  // DateTimeNow
  let d = new Date();
  // let ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(d);
  // let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  // let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  var n = d.toLocaleString([], { hour12: true });

  let DateTime = `Added on ${n}`;
  /**
   * ฟังก์ชัน handleClickAdd เราสามารถ Reuse ให้ Add widget อะไรก็ได้
   * เพียงแค่ส่ง type กับ value เข้ามาจาก Add Widget แบบต่างๆ
   * */
  const handleClickAdd = function (type, value) {
    let id;
    if (listAllWidgets.length == 0) {
      id = 1;
    } else {
      const lastArray = listAllWidgets.slice(-1).pop(); // .slice(-1).pop() เลือก array ตัวสุดท้ายมาให้
      id = lastArray.id + 1;
    }
    const data = {
      value,
      id: id,
      date: DateTime,
      type,
    };
    if (type === 'justShout') {
      setDefaultValueShout(value);
      listAllWidgets.map((list) => {
        if (list.type === 'justShout') {
          list.value = value;
        }
      });
    }
    setListAllWidgets([...listAllWidgets, data]);
    handleCancel();
  };

  // Update widgets state เป็นค่าใหม่
  const onClickEdit = (newId, newValue) => {
    let newListAllWidgets = [];
    listAllWidgets.map((data) => {
      if (data.id === newId) {
        data.value = newValue;
        // return newId;
      }
      newListAllWidgets.push(data);
    });

    setListAllWidgets(newListAllWidgets);
  };

  const onClickEditJustShout = (newValue) => {
    let newListAllWidgets = [];
    listAllWidgets.map((data) => {
      if (data.type === 'justShout') {
        data.value = newValue;
        setDefaultValueShout(newValue);
        // return newId;
      }
      newListAllWidgets.push(data);
    });

    setListAllWidgets(newListAllWidgets);
    setModalActiveSetting(false);
  };

  const onClickEditWeather = (newId, newType, newValue) => {
    let newListAllWidgets = [];
    listAllWidgets.map((data) => {
      if (data.id === newId) {
        data.type = newType;
        data.value = newValue;
        data.date = DateTime;
        // return newId;
      }
      newListAllWidgets.push(data);
    });
    setListAllWidgets(newListAllWidgets);
  };

  // Delete widgets state
  const handleClickDelete = function (list) {
    if (listAllWidgets.length > 0) {
      setListAllWidgets(
        listAllWidgets.filter((widget) => widget.id !== list.id)
      );
    }
    setDefaultValueShout('');
  };

  // Create widgets state
  const handleAddWidgets = function () {
    if (listAllWidgets.length > 0) {
      return listAllWidgets.map((list) => {
        if (list.type === 'justSay') {
          return (
            <JustSay
              onClickEdit={onClickEdit}
              onClickDelete={handleClickDelete}
              key={list.id}
              list={list}
            />
          );
        } else if (list.type === 'justShout') {
          return (
            <JustShout
              onClickEditJustShout={onClickEditJustShout}
              onClickDelete={handleClickDelete}
              key={list.id}
              list={list}
            />
          );
        } else if (list.type === 'counter') {
          return (
            <Counter
              onClickDelete={handleClickDelete}
              key={list.id}
              list={list}
              setZero={setZero}
              zero={zero}
            />
          );
        } else if (list.type === 'timer') {
          return (
            <Timer
              onClickDelete={handleClickDelete}
              key={list.id}
              list={list}
              setZero={setZero}
              zero={zero}
              listAllWidgets={listAllWidgets}
              setTotaltime={setTotaltime}
              totalTime={totalTime}
              onClickEdit={onClickEdit}
            />
          );
        } else if (list.type === 'weather' || list.type === 'weatherNone') {
          return (
            <Weather
              onClickEditWeather={onClickEditWeather}
              onClickDelete={handleClickDelete}
              key={list.id}
              list={list}
            />
          );
        } else if (list.type === 'photoApi') {
          return (
            <PhotoApi
              onClickEdit={onClickEdit}
              onClickDelete={handleClickDelete}
              key={list.id}
              list={list}
            />
          );
        }
      });
    } else {
      return (
        <div className='md:inner md:w-1/2 pb-4 md:pr-4'>
          <div className='p-5 border-1 bg-white rounded-2xl'>
            <div className='text-center text-gray-400 my-8 font-light'>
              <p className='text-4xl mb-2'>No widgets at all</p>
              <p>
                Click{' '}
                <Btn color='none' onClick={handleClickMenu}>
                  HERE
                </Btn>{' '}
                to add a new one
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  // SetZero value
  const onSetZero = function (e) {
    e.preventDefault(e);
    setZero(e.target.selector.value);
    setModalActiveSetting(false);
  };

  // Clear widget
  const clearWidgets = () => {
    // clear all history
    setListAllWidgets([]);
    setModalActiveSetting(false);
    setDefaultValueShout('');
  };

  // CSS icon
  let iconTool = 'inline-block text-xl relative -top-0.5';
  let iconClass = 'mx-auto text-4xl';
  let flexClass = 'md:flex md:flex-wrap md:-mr-4';
  let selectClass =
    'flex-1 mt-1 mr-1.5 py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 text-sm';

  return (
    <>
      <h2 className='text-xl'>Widgets</h2>
      <div className='pt-3'>
        <div className='mb-4'>
          <Btn color='primary' onClick={handleClickMenu}>
            <RiAddCircleLine className={`${iconTool}`} /> Add Widget
          </Btn>{' '}
          <Btn onClick={handleClickSetting} color='default'>
            <RiSettings3Line className={`${iconTool}`} /> Settings
          </Btn>
        </div>
        <div className={`${flexClass}`}>{handleAddWidgets()}</div>
        {modalActiveMenu && (
          <ModalCard onCancel={handleCancel}>
            <TextHead>Add widget</TextHead>
            <div className='flex flex-wrap text-center mt-1.5 -ml-1.5'>
              {/* JustSay */}
              <WidgetMenuCard title='JustSay' onClick={handleClickJustsay}>
                <AiOutlineMessage className={`${iconClass}`} />
              </WidgetMenuCard>
              {/* JustShout */}
              <WidgetMenuCard title='JustShout' onClick={handleClickJustShout}>
                <HiOutlineSpeakerphone className={`${iconClass}`} />
              </WidgetMenuCard>
              {/* Counter */}
              <WidgetMenuCard title='Counter' onClick={handleClickCounter}>
                <RiIncreaseDecreaseLine className={`${iconClass}`} />
              </WidgetMenuCard>
              {/* Timer */}
              <WidgetMenuCard
                title='Timer'
                onClick={() => {
                  handleClickAdd('timer', '');
                }}
              >
                <IoTimerOutline className={`${iconClass}`} />
              </WidgetMenuCard>
              {/* Weather */}
              <WidgetMenuCard title='Weather' onClick={handleClickWeather}>
                <TiWeatherPartlySunny className={`${iconClass}`} />
              </WidgetMenuCard>
              {/* My_Widget */}
              <WidgetMenuCard
                title='Photo'
                onClick={() => {
                  handleClickAdd('photoApi', '');
                }}
                // onClick={handleClickPhoto}
              >
                <RiCameraLensFill className={`${iconClass}`} />
              </WidgetMenuCard>
            </div>
          </ModalCard>
        )}
        {/* Modal_Justsay */}
        {modalActiveJustsay && (
          <ModalCard onCancel={handleCancel}>
            <FormJustSay onAdd={handleClickAdd} />
          </ModalCard>
        )}
        {/* Modal_JustShout */}
        {modalActiveJustShout && (
          <ModalCard onCancel={handleCancel}>
            <FormJustShout
              onAdd={handleClickAdd}
              defaultValueShout={defaultValueShout}
            />
          </ModalCard>
        )}
        {/* Modal_Counter */}
        {modalActiveCounter && (
          <ModalCard onCancel={handleCancel}>
            <FormCounter onAdd={handleClickAdd} />
          </ModalCard>
        )}
        {/* Modal_Weather */}
        {modalActiveWeather && (
          <ModalCard onCancel={handleCancel}>
            <FormWeather
              onAdd={handleClickAdd}
              defaultValueShout={defaultValueShout}
            />
          </ModalCard>
        )}
        {/* Modal_Settings */}
        {modalActiveSetting && (
          <ModalCard onCancel={handleCancel}>
            <Settings
              onCancel={handleCancel}
              listAllWidgets={listAllWidgets}
              setZero={setZero}
              totalTime={totalTime} // realtime_show
              setTotaltime={setTotaltime}
              defaultValueShout={defaultValueShout}
              onEditJustShout={onClickEditJustShout}
              clearWidgets={clearWidgets}
            >
              <SettingCard title='Reset Zone'>
                <form onSubmit={onSetZero}>
                  <div className='flex items-center'>
                    <select name='selector' className={`${selectClass}`}>
                      <option value='Counter'>All counters</option>
                      <option value='Timer'>All timers</option>
                    </select>
                    <Btn colorTool='colorTool' btnName='Set zero' />
                  </div>
                </form>
              </SettingCard>
            </Settings>
          </ModalCard>
        )}
      </div>
    </>
  );
}
