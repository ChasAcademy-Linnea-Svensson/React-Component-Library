import Card from './Card';
import ListGroup from './ListGroup';
import Title from './Title';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';
import { TiContacts } from 'react-icons/ti';

function ListGroups() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Title>List Groups</Title>
      <Card>
        <ListGroup type='row' bgColor='primary'>
          <ListGroup.Item>Start</ListGroup.Item>
          <ListGroup.Item>About</ListGroup.Item>
          <ListGroup.Item>Portfolio</ListGroup.Item>
          <ListGroup.Item>Contact</ListGroup.Item>
        </ListGroup>
        <h2>Type: row && bgColor: primary</h2>
      </Card>
      <Card>
        <ListGroup type='col' bgColor='secondary'>
          <ListGroup.Item>Start</ListGroup.Item>
          <ListGroup.Item>About</ListGroup.Item>
          <ListGroup.Item>Portfolio</ListGroup.Item>
          <ListGroup.Item>Contact</ListGroup.Item>
        </ListGroup>
        <h2>Type: col && bgColor: secondary</h2>
      </Card>
      <Card>
        <ListGroup type='col' bgColor='primary'>
          <ListGroup.Item icon={<CgProfile />}>Start</ListGroup.Item>
          <ListGroup.Item icon={<AiOutlineInfoCircle />}>About</ListGroup.Item>
          <ListGroup.Item icon={<MdWork />}>Portfolio</ListGroup.Item>
          <ListGroup.Item icon={<TiContacts />}>Contact</ListGroup.Item>
        </ListGroup>
        <h2>With icons</h2>
      </Card>
    </div>
  );
}

export default ListGroups;
