import Rating from './Rating';
import Title from './Title';
import Card from './Card';

function Ratings() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Title>Ratings</Title>
      <Card>
        <Rating size='medium'>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
        </Rating>
        <h2>Size: medium</h2>
      </Card>
      <Card>
        <Rating size='large'>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
          <Rating.Star filled={false} />
          <Rating.Star filled={false} />
        </Rating>
        <h2>Size: large</h2>
      </Card>
      <Card>
        <Rating size='small'>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
          <Rating.Star filled={false} />
          <p className='text-sm'>4.35 out of 5</p>
        </Rating>
        <Rating.Advanced percentFilled={68}>5 star</Rating.Advanced>
        <Rating.Advanced percentFilled={15}>4 star</Rating.Advanced>
        <Rating.Advanced percentFilled={9}>3 star</Rating.Advanced>
        <Rating.Advanced percentFilled={7}>2 star</Rating.Advanced>
        <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
        <h2>Advanced rating</h2>
      </Card>
    </div>
  );
}

export default Ratings;
