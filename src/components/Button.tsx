type Props = {
  onClick: () => void;
};

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded w-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
