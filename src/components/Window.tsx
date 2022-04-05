type WindowProps = {
  onClick?: () => void;
};

const Window: React.FC<WindowProps> = ({ children, onClick }) => {
  return (
    <div
      className="p-2 border rounded-md shadow-sm outline outline-1 outline-offset-2 outline-gray-500 bg-slate-700 text-white"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Window;
