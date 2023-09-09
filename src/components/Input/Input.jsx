import { StyledInput } from "./Input.styles";

const Input = ({ id, placeholder, handleInputValue }) => {
  const handleSearch = (e) => {
    handleInputValue(e.target.value);

  };

  return (
    <StyledInput
      id={id}
      className={id}
      placeholder={placeholder}
      onChange={handleSearch}
    />
  );
};

export default Input;