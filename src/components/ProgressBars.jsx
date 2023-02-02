import Card from './Card';
import ProgressBar from './ProgressBar';
import Title from './Title';

function ProgressBars() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Title>Progress bars</Title>
      <Card>
        <ProgressBar size='small' percentFilled={25}></ProgressBar>
        <ProgressBar percentFilled={50} color='blue'></ProgressBar>
        <ProgressBar
          size='large'
          percentFilled={75}
          color='yellow'
        ></ProgressBar>
        <h2>Different size and colors</h2>
      </Card>
      <Card>
        <ProgressBar percentFilled={50} type='percent'></ProgressBar>
        <h2>Bar & percent showing</h2>
      </Card>
      <Card>
        <ProgressBar percentFilled={50} type='percent'>
          Progress
        </ProgressBar>
        <h2>Title, Bar & percent showing</h2>
      </Card>
    </div>
  );
}

export default ProgressBars;
