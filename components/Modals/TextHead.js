export const TextHead = ({ children }) => (
  <h2 className='text-xl mb-4'>{children}</h2>
);

export const TextHeadSetting = ({ children }) => (
  <h2 className='text-lg font-bold text-gray-400 mb-1.5'>{children}</h2>
);

export const TextHeadTable = ({ title, children }) => (
  <div className='table-row'>
    <div className='table-cell pr-4 font-semibold'>{title}</div>
    <div className='table-cell'>{children}</div>
  </div>
);

export const TextHeadWidget = ({ title }) => (
  <h2 className='text-xl mb-2'>{title}</h2>
);

export const TextError = ({ children }) => (
  <h2 className='text-red-600 text-xs mt-1'>{children}</h2>
);
