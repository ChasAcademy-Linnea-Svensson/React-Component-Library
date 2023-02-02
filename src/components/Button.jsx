function Button({ children, size, color, disabled, handleClick }) {
  const styles = {
    color: {
      primary: 'bg-quicksand-800 text-quicksand-200',
      secondary: 'border-2 border-quicksand-800 text-quicksand-800',
    },
    size: {
      small: 'h-12 w-28',
      big: 'h-14 w-56',
    },
    isDisabled: {
      true: 'bg-stone-200 text-stone-500 cursor-not-allowed',
      false: '',
    },
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded-xl ${styles.color[color]}
       ${styles.size[size]} ${styles.isDisabled[disabled]} ${
        disabled !== true && 'hover:opacity-50 active:scale-90'
      }`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  color: 'primary',
  size: 'small',
  disabled: false,
};

export default Button;
