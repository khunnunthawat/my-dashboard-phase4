import React from 'react';
import { TextHeadSetting } from '../Modals/TextHead';

export default function SettingCard({ children, title }) {
  return (
    <div className='p-5 border-1 bg-white rounded-2xl relative mb-4'>
      <TextHeadSetting>{title}</TextHeadSetting>
      {children}
    </div>
  );
}
