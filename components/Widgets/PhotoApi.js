import React, { useState } from 'react';
import { CardPhoto } from '../Layouts/Card';
import Btn from '../Btn';
import { BiSearchAlt } from 'react-icons/bi';
// import { createApi } from 'unsplash-js';
import Unsplash, { toJson } from 'unsplash-js';

export default function PhotoApi({ list, onClickDelete }) {
  const [photo, setPhoto] = useState([]);
  const [query, setQuery] = useState('');

  const handleClick = function () {
    onClickDelete(list);
  };

  const unsplash = new Unsplash({
    // See https://unsplash.com/developers
    accessKey: 'WHryKKM8-ZDMJqMGMl9ExUDXmOFNODvHSKKtACBSWr8',
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        setPhoto(json.results);
        console.log(json);
      });
  };

  return (
    <>
      <CardPhoto
        title='Photos'
        key={list.id}
        onClickDelete={handleClick}
        list={list}
      >
        <form onSubmit={onSubmit} className='flex'>
          <div className='flex-1 mr-1'>
            <input
              // name='title'
              name='query'
              type='text'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className='w-full px-2.5 py-1 focus:outline-none rounded-md'
              placeholder='Input search photos...'
            />
          </div>
          <div>
            <Btn color='primary'>
              <BiSearchAlt className='mx-auto text-2xl' />
            </Btn>
          </div>
        </form>
        <div className='grid sm:grid-cols-3 md:grid-cols-5'>
          {photo.map((pic) => (
            <div className='grid max-w-4xl mx-auto p-2' key={pic.id}>
              <img
                alt={pic.alt_description}
                src={pic.urls.full}
                className='w-full block rounded'
              ></img>
            </div>
          ))}
        </div>
      </CardPhoto>
    </>
  );
}