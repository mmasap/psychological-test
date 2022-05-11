type LabelProps = {
  htmlFor?: string;
};

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label className="block text-gray-700 text-sm font-bold" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
