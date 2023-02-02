import Button from './Button';
import Card from './Card';
import Title from './Title';
import Tooltip from './Tooltip';

function Tooltips() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Title>Tooltips</Title>
      <Card>
        <Tooltip content='Tooltip text'>Tooltip</Tooltip>
        <h2>Color: black</h2>
      </Card>
      <Card>
        <Tooltip color='white' content='Tooltip text'>
          Tooltip
        </Tooltip>
        <h2>Color: white</h2>
      </Card>
    </div>
  );
}

export default Tooltips;
