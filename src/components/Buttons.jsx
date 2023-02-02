import Button from './Button';
import Card from './Card';
import Title from './Title';

function Buttons() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Title>Buttons</Title>
      <div className='flex flex-col'>
        <Card>
          <Button color='primary' size='small'>
            Primary
          </Button>
          <h2>Color: primary & Size: small</h2>
        </Card>
        <Card>
          <Button color='secondary' size='big'>
            Secondary
          </Button>
          <h2>Color: secondary & Size: big</h2>
        </Card>
        <Card>
          <Button disabled={true} size='small'>
            Disabled
          </Button>
          <h2>Color: primary & Size: small</h2>
        </Card>
      </div>
    </div>
  );
}

export default Buttons;
