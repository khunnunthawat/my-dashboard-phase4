import React from 'react';
import { IoClose } from 'react-icons/io5';
import { MdEdit, MdRefresh } from 'react-icons/md';

let mdCss = 'md:inner md:w-1/2 pb-4 md:pr-4';
let mdCssPhoto = 'md:inner md:w-full pb-4 md:pr-4';
let bgCard = 'p-5 border-1 bg-white rounded-2xl relative';
let textCss = 'text-lg font-bold text-gray-400 mb-1.5';
let absCss = 'absolute top-5 right-5';
let iconText = 'text-lg text-gray-600 focus:outline-none';

export const Card = ({ title, children, onClickDelete = () => { } }) => {
  
  const handleClick = function (e) {
    onClickDelete(e);
  };

  return (
    <div className={`${mdCss}`}>
      <div className={`${bgCard}`}>
        <h2 className={`${textCss}`}>{title}</h2>
        <div className={`${absCss}`}>
          <button className={`${iconText}`} onClick={handleClick}>
            <IoClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export const CardEdit = ({
  title,
  children,
  onClickDelete,
  onClickEdit
}) => {
  const handleClick = function (e) {
    onClickDelete(e);
  };

  const handleClickEdit = function (e) {
    onClickEdit(e);
  };

  return (
    <div className={`${mdCss}`}>
      <div className={`${bgCard}`}>
        <h2 className={`${textCss}`}>{title}</h2>
        <div className={`${absCss}`}>
          <button className={`${iconText} + mr-2`} onClick={handleClickEdit}>
            <MdEdit />
          </button>
          <button className={`${iconText}`} onClick={handleClick}>
            <IoClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export const CardEditRefresh = ({
  title,
  children,
  onClickDelete,
  onClickEdit,
  onClickRefresh,
}) => {
  const handleClick = function (e) {
    onClickDelete(e);
  };

  const handleClickEdit = function (e) {
    onClickEdit(e);
  };

  const onEditRefresh = function (e) {
    onClickRefresh(e);
  };

  return (
    <div className={`${mdCss}`}>
      <div className={`${bgCard}`}>
        <h2 className={`${textCss}`}>{title}</h2>
        <div className={`${absCss}`}>
          <button className={`${iconText} + mr-2`} onClick={onEditRefresh}>
            <MdRefresh />
          </button>
          <button className={`${iconText} + mr-2`} onClick={handleClickEdit}>
            <MdEdit />
          </button>
          <button className={`${iconText}`} onClick={handleClick}>
            <IoClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export const CardPhoto = ({ title, children, onClickDelete }) => {
  const handleClick = function (e) {
    onClickDelete(e);
  };

  return (
    <div className={`${mdCssPhoto}`}>
      <div className={`${bgCard}`}>
        <h2 className={`${textCss}`}>{title}</h2>
        <div className={`${absCss}`}>
          <button className={`${iconText}`} onClick={handleClick}>
            <IoClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

