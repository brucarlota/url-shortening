import { styled } from "styled-components";
import Input from "@mui/material/Input";

export const StyledInput = styled(Input)`
  && {
    margin-right: 20px;
    border-radius: 8px;
    padding: 13px;
    background: #fff;
    color: #34313D;
    font-family: inherit;
    flex: auto;
  }

  &&::after {
    border: none;
    border-bottom: none;
  }
`;