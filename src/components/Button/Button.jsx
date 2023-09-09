import { StyledButton } from './Button.styles';

export const Shape = {
  square: 'square',
  circle: 'circle',
} ;

const Button = ({id, shape, bgcolor, link, text, align, handleAction }) => {
  return (
    <StyledButton id={id} className={id} href={link} shape={shape} bgcolor={bgcolor} align={align} onClick={handleAction}>{text}</StyledButton>
  );
};

export default Button;