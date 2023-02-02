import React from 'react';

function ProgressBar({ children, type, size, color, percentFilled }) {
  const style = {
    color: {
      quicksand: 'bg-quicksand-600',
      blue: 'bg-blue-600',
      yellow: 'bg-yellow-400',
    },
    size: {
      small: 'h-3',
      medium: 'h-5',
      large: 'h-7',
    },
    type: {
      default: '',
      percent: `${percentFilled}%`,
    },
  };
  return (
    <div className='flex items-center gap-4'>
      {children}
      <div
        className={`relative ${style.size[size]} w-48 rounded-md ${style.color[color]} bg-opacity-30`}
      >
        <div
          className={`absolute z-10 ${style.size[size]} rounded-md ${style.color[color]}`}
          style={{ width: percentFilled + '%' }}
        ></div>
      </div>
      {style.type[type]}
    </div>
  );
}

ProgressBar.defaultProps = {
  color: 'quicksand',
  type: 'default',
  size: 'medium',
};

export default ProgressBar;
