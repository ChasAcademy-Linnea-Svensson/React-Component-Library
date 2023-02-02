import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import ProgressBar from './ProgressBar';

function Rating({ children, size }) {
  const style = {
    size: {
      small: 'text-sm',
      medium: 'text-lg',
      large: 'text-2xl',
    },
  };

  return (
    <div className={`flex gap-2 items-center ${style.size[size]}`}>
      {children}
    </div>
  );
}

function Star({ filled }) {
  return filled ? <AiFillStar /> : <AiOutlineStar />;
}

function Advanced({ children, percentFilled }) {
  return (
    <ProgressBar type='percent' percentFilled={percentFilled}>
      {children}
    </ProgressBar>
  );
}

Rating.Star = Star;
Rating.Advanced = Advanced;

Star.defaultProps = {
  filled: true,
};
Advanced.defaultProps = {
  percentFilled: 20,
};

export default Rating;
