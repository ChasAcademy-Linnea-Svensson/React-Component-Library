import { useState } from 'react';
import Button from './Button';
import { AiFillCloseCircle } from 'react-icons/ai';

function Modal({ children, btnText, size }) {
  const handleClick = (e) => {
    setActive(active ? false : true);
    e.stopPropagation();
  };

  const [active, setActive] = useState(false);

  const handleInsideClick = (e) => {
    e.stopPropagation();
  };

  const style = {
    size: {
      small: 'md:w-[600px] w-[400px] min-h-[200px]',
      big: 'md:w-[800px] w-[500px] min-h-[200px]',
    },
  };

  return (
    <>
      <div>
        <Button handleClick={handleClick}>{btnText}</Button>
      </div>

      {/* PopUp */}
      <div className={`${active ? 'block' : 'hidden'}`}>
        <div
          className='flex items-center justify-center z-20 bg-black bg-opacity-50 w-[100vw] h-[100vh] fixed top-0 left-0'
          onClick={handleClick}
        >
          <div
            className={` bg-quicksand-100 shadow-lg shadow-black text-quicksand-900 rounded-lg flex flex-col items-center justify-center relative gap-4 py-4 ${style.size[size]}`}
            onClick={handleInsideClick}
          >
            {children}
            <button
              onClick={handleClick}
              className='absolute top-4 right-4 text-xl'
            >
              <AiFillCloseCircle />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Modal.defaultProps = {
  size: 'big',
};

function Head({ children }) {
  return (
    <>
      <div className='text-3xl py-4'>{children}</div>
      <div className='w-full h-1 bg-quicksand-600'></div>
    </>
  );
}

function Body({ children }) {
  return (
    <>
      <div className=' flex flex-col gap-6 p-6'>{children}</div>
      <div className='w-full h-1 bg-quicksand-600'></div>
    </>
  );
}

function Footer({ children }) {
  return <div className=' flex gap-6 p-6'>{children}</div>;
}

function Btn({ children, color, size }) {
  return (
    // Fix handle click later
    <Button size={size} color={color}>
      {children}
    </Button>
  );
}

Modal.Head = Head;
Modal.Body = Body;
Modal.Footer = Footer;
Modal.Btn = Btn;

export default Modal;
