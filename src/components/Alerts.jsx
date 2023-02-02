import Alert from './Alert';
import { GoAlert } from 'react-icons/go';
import { IoMdAlert } from 'react-icons/io';
import Card from './Card';
import Title from './Title';

function Alerts() {
  return (
    <div className='flex flex-col items-center mb-10'>
      <Title>Alerts</Title>
      <Card>
        <Alert>
          Info alert! Change a few things up and try submitting again.
        </Alert>
        <h2>Color: default & no Icon</h2>
      </Card>

      <Card>
        <Alert icon={<IoMdAlert />} color='info'>
          Info alert! Change a few things up and try submitting again.
        </Alert>
        <h2>Color: info & Icon: IoMdAlert</h2>
      </Card>

      <Card>
        <Alert
          icon={<GoAlert />}
          color='warning'
          onDismiss={'The alert got dismissed!'}
        >
          Warning! Change a few things up and try submitting again.
        </Alert>
        <h2>Color: warning, Icon: GoAlert & dismissed message</h2>
      </Card>
    </div>
  );
}

export default Alerts;
