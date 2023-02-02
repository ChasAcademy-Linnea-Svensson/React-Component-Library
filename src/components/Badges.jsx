import Badge from './Badge';
import Card from './Card';
import Title from './Title';

function Badges() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Title>Badges</Title>
      <Card>
        <Badge />
        <h2>Color:primary, Size:small & Icon: check </h2>
      </Card>
      <Card>
        <Badge color='secondary' size='big' icon='check'>
          Task done{' '}
        </Badge>
        <h2>Color:secondary, Size:big & Icon: check </h2>
      </Card>
      <Card>
        <Badge color='primary' size='big' icon='time'>
          2 Days ago{' '}
        </Badge>
        <h2>Color:primary, Size:big & Icon: time </h2>
      </Card>
    </div>
  );
}

export default Badges;
