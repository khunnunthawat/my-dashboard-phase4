###
  create project
  npx create-next-app my-dashboard
###

###
  Tailwind CSS
  npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
  npx tailwindcss init -p
  // tailwind.config.js
  tailwind.config.js => purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
  // pages/_app.js
  import 'tailwindcss/tailwind.css'

  /* ./styles/globals.css */
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
###

###
  LinkCSS
  https://blog.marclucraft.co.uk/masonry-layout-with-tailwindcss
  https://reacttricks.com/nested-dynamic-layouts-in-next-apps/
  CSS Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  https://www.tailwindtoolbox.com/
  https://www.tailwind-kit.com/components
  container w-full
###

###
  Ref.Time : https://dev.to/abdulbasit313/how-to-develop-a-stopwatch-in-react-js-with-custom-hook-561b
  https://codepen.io/Basit600/pen/YzwRaRp
###

###
// Clear widget
  const clearWidgets = () => {
    // clear all history
    setListAllWidgets([]);
  };

  let colorTool = false;

  let clearBtn = (
    <Btn onClick={clearWidgets} colorTool={colorTool}>
      <RiSettings3Line className={`${iconTool}`} /> Settings
    </Btn>
  );
  if (listAllWidgets.length > 0) {
    clearBtn = (
      <Btn onClick={clearWidgets} colorTool={!colorTool}>
        <RiSettings3Line className={`${iconTool}`} /> Settings
      </Btn>
    );
  }
###

###
// iconEdit
  import { MdClose } from 'react-icons/md';
  import { MdEdit } from 'react-icons/md';

  <div class='absolute top-5 right-5'>
    <button class='text-lg text-gray-600 focus:outline-none mr-2'>
      <MdEdit />
    </button>
    <button class='text-lg text-gray-600 focus:outline-none undefined'>
      <MdClose />
    </button>
  </div>
###

###
  cheatsheet tailwind css
  Link : https://tailwindcomponents.com/cheatsheet/
###

###
  // Clear widget
  // const clearWidgets = () => {
  //   // clear all history
  //   setListAllWidgets([]);
  // };

  // let colorTool = false;

  // let clearBtn = (
  //   <Btn onClick={clearWidgets} colorTool={colorTool}>
  //     <RiSettings3Line className={`${iconTool}`} /> Settings
  //   </Btn>
  // );
  // if (listAllWidgets.length > 0) {
  //   clearBtn = (
  //     <Btn onClick={clearWidgets} colorTool={!colorTool}>
  //       <RiSettings3Line className={`${iconTool}`} /> Settings
  //     </Btn>
  //   );
  // }
###

###
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

  // // Update widgets state เป็นค่าใหม่
  // setWidgets(
  //   widgets.map((widget) => {
  //     if (widget.id === updatedWidget.id) {
  //       return updatedWidget; // คืน widget ที่ทำการอัปเดตค่าแล้ว
  //     } else {
  //       return widget; // คืน widget ของเดิม
  //     }
  //   })
  // );
###

###
  // const [titleJustsay, setTitleJustsay] = useState('');
  // const [counter, setCouter] = useState('');
  // const [timer, setTimer] = useState('');
###

###
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
      // date: DateTime,
      type,
    };
    setListAllWidgets([...listAllWidgets, data]);
    handleCancel();
  };
###

###
icon weather : https://openweathermap.org/weather-conditions
weather : max min
link : https://stackoverflow.com/questions/8864430/compare-javascript-array-of-objects-to-get-min-max

  var lowest = Number.POSITIVE_INFINITY;
  var highest = Number.NEGATIVE_INFINITY;

  highest = `${parseInt(list.value.data.main.temp)}`;
    if (highest < lowest) {
      lowest = highest;
      weatherCity = list.value.data.name;
    }
###

###
API_Weather
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
###

###
  API unsplash
  npm install unsplash-js@6.0.0
  https://www.npmjs.com/package/unsplash-js/v/6.0.0
  https://unsplash.com/developers
  https://github.com/unsplash/unsplash-js
###

###
  // ES Modules syntax
  import Unsplash from 'unsplash-js';
  // require syntax
  const Unsplash = require('unsplash-js').default;
  
  const unsplash = new Unsplash({ accessKey: "{APP_ACCESS_KEY}" });
  
  const unsplash = new Unsplash({
    accessKey: "{APP_ACCESS_KEY}",
    // Optionally you can also configure a custom header to be sent with every request
    headers: {
      "X-Custom-Header": "foo"
    },
    // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
    timeout: 500 // values set in ms
  });
###

###
  Tailwind CSS Multi-Column Plugin
  npm i tailwindcss-multi-column
  https://www.npmjs.com/package/tailwindcss-multi-column
###