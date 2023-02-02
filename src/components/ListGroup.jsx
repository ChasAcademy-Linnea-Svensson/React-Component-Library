import React from 'react';
import { Link } from 'react-router-dom';

function ListGroup({ children, type, bgColor }) {
  const style = {
    type: {
      row: 'flex-row w-fit',
      col: 'flex-col w-60',
    },
    bgColor: {
      primary: 'bg-quicksand-600 text-quicksand-100',
      secondary:
        'bg-quicksand-100 border-2 border-quicksand-600 text-quicksand-900',
    },
  };
  return (
    <ul
      className={`rounded-xl flex ${style.type[type]}  ${style.bgColor[bgColor]}`}
    >
      {children}
    </ul>
  );
}

function Item({ children, to, icon }) {
  return (
    <li>
      <Link to={to}>
        <div className='px-4 py-2 hover:bg-quicksand-300 hover:text-quicksand-900 rounded-lg flex items-center gap-4'>
          {icon}
          {children}
        </div>
      </Link>
    </li>
  );
}

ListGroup.Item = Item;

ListGroup.defaultProps = {
  type: 'row',
  bgColor: 'primary',
};

Item.defaultProps = {
  to: '/',
};

export default ListGroup;
