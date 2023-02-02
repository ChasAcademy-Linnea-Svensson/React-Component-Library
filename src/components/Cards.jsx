import Card from './Card';

function Cards() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-5xl mb-4'>Cards</h1>
      <Card>
        <p>A card without an image</p>
      </Card>
      <Card imgSrc='/cat.jpg' imgAlt='cat laying down'>
        <p>A card with an image</p>
      </Card>
      <Card btnText='Google' href='https://www.google.com/'>
        <p>A card with href in form of a button</p>
      </Card>
    </div>
  );
}

export default Cards;
