import { StyledButton } from './Button.styles';

export const Shape = {
  square: 'square',
  circle: 'circle',
} ;

const Button = ({id, shape, bgcolor, link, text}) => {
  return (
    <StyledButton id={id} href={link} shape={shape} bgcolor={bgcolor}>{text}</StyledButton>
  );
};

export default Button;