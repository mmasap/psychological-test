import classNames from 'classnames';

type ButtonProps = {
  onClick?: () => void;
  color?: typeof buttonColors[number];
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
};

export const buttonColors = ['red', 'blue', 'green', 'yellow'] as const;

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color,
  fullWidth,
  className,
  disabled = false,
}) => {
  const getButtonColor = () => {
    switch (color) {
      case 'red':
        return 'bg-red-500 hover:disabled:bg-red-500 hover:bg-red-400';
      case 'blue':
        return 'bg-blue-500 hover:disabled:bg-blue-500 hover:bg-blue-400';
      case 'green':
        return 'bg-green-500 hover:disabled:bg-green-500 hover:bg-green-400';
      case 'yellow':
        return 'bg-yellow-500 hover:disabled:bg-yellow-500 hover:bg-yellow-400';
      default:
        return 'bg-pink-500 hover:disabled:bg-pink-500 hover:bg-pink-400';
    }
  };
  return (
    <button
      className={classNames(
        'text-white font-bold py-2 px-4 rounded disabled:opacity-50',
        getButtonColor(),
        {
          'w-full': fullWidth,
        },
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
