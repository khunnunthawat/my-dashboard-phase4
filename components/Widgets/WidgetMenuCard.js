import React from 'react';

function WidgetMenuCard({ onClick = () => { }, title, children }) {
  
  const handleClick = function () {
    onClick();
  };

  return (
    <>
      <div className='w-1/3 pt-1.5 pl-1.5'>
        <div
          className='text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer'
          onClick={handleClick}
        >
          {children}
          <h3 className='mt-1 font-semibold text-sm '>{title}</h3>
        </div>
      </div>
    </>
  );
}

export default WidgetMenuCard;
