type InputTextProps = {
  value?: string;
  id?: string;
  placeholder?: string;
  inputRef?: React.LegacyRef<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputText: React.FC<InputTextProps> = ({
  value,
  id,
  placeholder,
  inputRef,
  onChange,
}) => {
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ref={inputRef}
      id={id}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputText;
