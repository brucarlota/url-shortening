import { styled } from "styled-components";
import Button from "@mui/material/Button";
import { Shape } from "./Button";

export const StyledButton = styled(Button)`
  && {
    border-radius: ${(props) => props.shape === Shape.circle ? '1.75rem' : '0.3125rem'};
    background: ${(props) => props.bgcolor};
    color: #FFF;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-family: inherit;
    text-transform: capitalize;
    padding: 0.78rem 2.5rem;
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-wrap: nowrap;
    align-self: ${(props) => props.align}
  }

  &&:hover {
    background: #9AE3E3;
  }
`;