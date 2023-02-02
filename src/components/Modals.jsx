import Modal from './Modal';
import Button from './Button';
import Card from './Card';

function Modals() {
  return (
    <div>
      <Card>
        <Modal btnText='Modal 1'>
          <Modal.Head>
            <h1>Terms of Service</h1>
          </Modal.Head>
          <Modal.Body>
            <p>
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p>
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Btn size='big'>I accept</Modal.Btn>
            <Modal.Btn size='big' color='secondary'>
              Decline
            </Modal.Btn>
          </Modal.Footer>
        </Modal>
        <h2>Size: big</h2>
      </Card>

      <Card>
        <Modal btnText='Modal 2' size='small'>
          <Modal.Head>
            <h1>Modal 2</h1>
          </Modal.Head>
          <Modal.Body>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              doloremque sapiente error illo impedit ex fuga magnam amet soluta
              aliquid.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              nesciunt?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button>Click Me</Button>
          </Modal.Footer>
        </Modal>
        <h2>Size: small</h2>
      </Card>
    </div>
  );
}

export default Modals;
