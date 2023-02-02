import CompLink from './components/CompLink';
import {
  BsMenuButtonWideFill,
  BsFillCreditCard2FrontFill,
} from 'react-icons/bs';
import {
  AiFillAlert,
  AiFillStar,
  AiOutlineLoading3Quarters,
} from 'react-icons/ai';
import { HiBadgeCheck } from 'react-icons/hi';
import { RiWindow2Fill } from 'react-icons/ri';
import { FaRegListAlt } from 'react-icons/fa';
import { GrTooltip } from 'react-icons/gr';

function ComponentList() {
  return (
    <div className='flex flex-col gap-2 p-2 border-r-4 border-quicksand-500 md:w-60 w-45  h-full fixed left-0 bg-quicksand-50 z-10'>
      <CompLink icon={<AiFillAlert />} link='/alerts'>
        Alerts
      </CompLink>
      <CompLink icon={<HiBadgeCheck />} link='/badges'>
        Badges
      </CompLink>
      <CompLink icon={<BsMenuButtonWideFill />} link='/buttons'>
        Buttons
      </CompLink>
      <CompLink icon={<BsFillCreditCard2FrontFill />} link='/cards'>
        Cards
      </CompLink>
      <CompLink icon={<FaRegListAlt />} link='/list-groups'>
        List Groups
      </CompLink>
      <CompLink icon={<RiWindow2Fill />} link='/modals'>
        Modals
      </CompLink>
      <CompLink icon={<AiOutlineLoading3Quarters />} link='/progress-bars'>
        Progress Bars
      </CompLink>
      <CompLink icon={<AiFillStar />} link='/ratings'>
        Ratings
      </CompLink>
      <CompLink icon={<GrTooltip />} link='/tooltips'>
        Tooltips
      </CompLink>
    </div>
  );
}

export default ComponentList;
