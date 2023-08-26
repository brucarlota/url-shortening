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


export const ShortenLink = styled.div`
  background-color: #3A3054;
  background-image: url('./src/assets/images/bg-boost-desktop.svg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50% 55%;
  padding: 40px;
  display: flex;
  justify-content: center;
  border-radius: 15px;
`;

export const ShortenLinkResult = styled.div`
  margin: 40px 0;

  .item {
    background-color: #FFF;
    color: #34313D;
    border-radius: 10px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 15px 30px;
    align-items: center;
    margin-bottom: 20px;
  }

  .item__description {
    overflow: hidden;
  }
  
  .item__copy {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-left: 12px;

    .shortlink {
      color: #2BD0D0;
      padding-right: 1.5rem;
    }
  }
`;
export const Cards = styled.section``;
export const SectionGetStarted = styled.section``;
