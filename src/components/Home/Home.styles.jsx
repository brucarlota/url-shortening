import { styled } from "styled-components";

export const MainContent = styled.main`
  
`;

export const SectionHighlights = styled.section`
  display: flex;
  flex-wrap: wrap;

  div {
    display: flex;
    flex: 50%;
    flex-wrap: wrap;
  }

  .image {
    width: 100%;
  }

  .title {
    color: #34313D;
    font-size: 5rem;
    line-height: 5.625rem; /* 112.5% */
    letter-spacing: -0.125rem;
    padding: 0;
    margin: 0;
  }

  .text {
    color: #9E9AA8;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.25rem;
    letter-spacing: 0.00938rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const SectionCards = styled.section`
  background: #EFF1F7;
`;


export const ShortenLink = styled.section``;
export const Cards = styled.section``;
export const SectionGetStarted = styled.section``;
