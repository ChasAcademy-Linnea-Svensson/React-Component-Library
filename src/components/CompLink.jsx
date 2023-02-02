import { Link } from 'react-router-dom';

function CompLink({ children, link, icon }) {
  return (
    <Link to={link}>
      <div className='h-16 flex items-center gap-4 justify-start px-4 hover:bg-quicksand-200 rounded-xl'>
        {icon}
        {children}
      </div>
    </Link>
  );
}

export default CompLink;
