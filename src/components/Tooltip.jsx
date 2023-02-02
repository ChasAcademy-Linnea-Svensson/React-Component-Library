import { useState } from 'react';

function Tooltip({ children, content, color }) {
  const style = {
    color: {
      black: 'bg-black text-quicksand-200',
      white: 'bg-white border-2 border-quicksand-600 text-quicksand-900',
    },
  };

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(show ? false : true);
  };

  return (
    <div className='relative'>
      <div
        className='h-14 w-36 rounded-xl bg-quicksand-800 flex items-center text-quicksand-100 justify-center hover:bg-opacity-80'
        onMouseEnter={handleShow}
        onMouseLeave={handleShow}
      >
        {children}
      </div>
      <div className='absolute top-[-6rem] left-[50%] translate-x-[-50%]'>
        <div
          className={`relative h-20 min-w-fit w-52 rounded-xl p-2 ${
            style.color[color]
          } flex items-center justify-center ${show ? 'block' : 'hidden'}`}
        >
          <div
            className={`absolute h-7 w-7 ${style.color[color]} bottom-[-0.7rem] rotate-45 z-[-1]`}
          ></div>
          {content}
        </div>
      </div>
    </div>
  );
}

Tooltip.defaultProps = {
  color: 'black',
};

export default Tooltip;
