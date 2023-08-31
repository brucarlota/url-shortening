import Card from "@mui/material/Card";
import { styled } from "styled-components";

export const StyledCard = styled(Card)`
  && {
    border-radius: 0.3125rem;
    background: #FFF;
    border: none;
    padding: 2rem;
    max-width: 15rem;
    max-height: 16.6875rem;
    margin: 2.5rem 0;
    overflow: visible;
    display: flex;
    flex-wrap: wrap;
    align-content: end;
    z-index:1;

    .cardContent {
      padding: 0;
    }

    @media screen and (max-width: 768px) {
      justify-content: center;
      align-content: initial;
      max-height: initial;
    }
  }

  &&.card-2 { 
    margin-top: 5rem;
  };

  &&.card-3 { 
    margin-top: 7.5rem;
  };

  .subtitle {
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: normal;
  }

  .text {
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.625rem;
  }
`;

export const ImageWrapper = styled.div`
  background: #3A3054;
  position: relative;
  margin-top: -5rem;
  border-radius: 50%;
  width: 5.5rem;
  height: 5.5rem;

  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;

  img {
    position: relative;
    width: 50%;
    height: 50%;
    align-self: center;
  }
`;