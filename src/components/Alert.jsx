import React from 'react';
import { GoAlert } from 'react-icons/go';

function Alert({ children, color, icon, onDismiss }) {
  const styles = {
    color: {
      default: 'bg-blue-100',
      info: 'bg-yellow-100',
      warning: 'bg-red-200',
    },
  };

  return (
    <div
      className={`${styles.color[color]} h-fit w-[450px] px-8 py-4 flex items-center justify-between`}
    >
      {icon !== undefined && <div className='mr-8'>{icon}</div>}
      <div className='mr-auto'>{children}</div>
      {onDismiss !== '' && <button onClick={() => alert(onDismiss)}>X</button>}
    </div>
  );
}

Alert.defaultProps = {
  color: 'default',
  onDismiss: '',
};

export default Alert;
