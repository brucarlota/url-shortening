import { StyledInput } from "./Input.styles";


const Input = ({ id, placeholder }) => {
  return (
    <StyledInput className={id} placeholder={placeholder} />
  );
};

export default Input;