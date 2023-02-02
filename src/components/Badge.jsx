import { BsCheckLg } from 'react-icons/bs';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';

function Badge({ children, color, size, icon }) {
  const styles = {
    color: {
      primary: 'bg-quicksand-800 text-quicksand-200',
      secondary: 'border-2 border-quicksand-800 text-quicksand-800',
    },
    size: {
      small: 'w-10 h-10 rounded-full justify-center',
      big: 'w-fit h-10 rounded-xl justify-around px-4 gap-2',
    },
    icon: {
      check: <BsCheckLg />,
      time: <MdOutlineAccessTimeFilled />,
    },
  };

  return (
    <div
      className={`flex items-center ${styles.color[color]} ${styles.size[size]}`}
    >
      {styles.icon[icon]}
      {children !== undefined && children}
    </div>
  );
}

Badge.defaultProps = {
  color: 'primary',
  size: 'small',
  icon: 'check',
};

export default Badge;
