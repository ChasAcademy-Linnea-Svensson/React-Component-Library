import Button from './Button';

function Card({ children, imgAlt, imgSrc, href, btnText }) {
  // ${
  //   imgSrc !== undefined ? 'px-6 pb-6' : 'p6'
  // }

  return (
    <div
      className={`flex flex-col items-center justify-center border-2 border-quicksand-500 shadow-lg shadow-quicksand-700 bg-quicksand-50 min-h-[200px] w-[480px] rounded-xl gap-6 mb-10 `}
      style={{ padding: imgSrc === undefined ? '2rem' : '0 0 2rem 0' }}
    >
      {imgSrc !== undefined && (
        <div className=' overflow-hidden w-[480px] h-60 border-x-2 border-quicksand-500  flex items-center justify-center rounded-t-xl'>
          <img src={imgSrc} alt={imgAlt} />
        </div>
      )}
      {children}
      {href !== undefined && (
        <a href={href} target='_blank'>
          <Button size='big'>{btnText}</Button>
        </a>
      )}
    </div>
  );
}

Card.defaultProps = {
  btnText: 'Click Me',
};

export default Card;
