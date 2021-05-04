import React from 'react';

export default function AboutContent() {

  const say = 'I love <programming />';

  return (
    <>
      <h2 className='text-xl'>About</h2>
      <div className='pt-3'>
        <div className='p-5 border-1 bg-white rounded-2xl'>
          <h2 className='text-lg font-bold text-gray-400 mb-1.5'>{say}</h2>
          <p>
            We have <strong>JustSay</strong>,{}
            <strong>JustShout</strong>,<strong>{} Counter</strong>,{}
            <strong>Timer</strong>,<strong>{} Weather</strong> and super hard{' '}
            <strong>TicTacToe</strong>
            {} widgets! You can now add / modify / delete widgets or even
            destroy all of them, also view super great useless statistics! Now
            bundled with
          </p>
          <p>
            state persistence, that remember your widgets eternally, except you
            wipe up your browser data :P
          </p>
          <p>
            Crafted with <span className='text-pink-500'>♥</span> by Eiffel.
          </p>
          <div className='flex flex-row-reverse space-x-4 space-x-reverse'>
            <img
              src='https://images.unsplash.com/profile-fb-1547572180-93a860f0a32b.jpg?auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff'
              width='50'
              height='50'
              className='rounded-full border-solid border-white border-2 -mt-2'
            />
          </div>
        </div>
      </div>
    </>
  );
}
