import React from 'react';
import PageLink from './PageLink';

export default function Page() {
  return (
    <div className='my-5'>
      <PageLink href='/' title='Widgets' />
      <PageLink href='/about' title='About' />
    </div>
  );
}