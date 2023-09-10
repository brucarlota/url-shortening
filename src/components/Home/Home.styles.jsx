import { styled } from "styled-components";

export const MainContent = styled.main`
  .title {
    color: #34313D;
    font-size: 5rem;
    line-height: 5.625rem;
    letter-spacing: -0.125rem;
    padding: 0;
    margin: 0;
  }

  .title2 {
    color: #34313D;
    text-align: center;
    font-family: Poppins;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: -0.0625rem;
    margin: 0;
  }

  .text {
    color: #9E9AA8;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.00769rem;
  }

  @media screen and (max-width: 768px) {
    .title {
      text-align: center;
      font-family: Poppins;
      font-size: 2.625rem !important;
      font-style: normal;
      font-weight: 700;
      line-height: 3rem !important; /* 114.286% */
      letter-spacing: -0.06563rem !important;
    }

    .title2 {
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 3rem;
      letter-spacing: -0.0625rem;
    }
  
    .text {
      text-align: center;
      font-size: 1rem;
    }
    
    div {
      justify-content: center;
    }
  }
`;

export const SectionHighlights = styled.section`
  display: flex;
  flex-wrap: wrap;

  div {
    display: flex;
    flex: 50%;
    flex-wrap: wrap;
    align-self: center;
  }

  .image {
    width: 100%;
  }

  .title {
    font-size: 5rem;
    line-height: 5.625rem;
    letter-spacing: -0.125rem;
  }

  .text {
    font-size: 1.375rem;
    line-height: 2.25rem;
    letter-spacing: 0.00938rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const SectionCards = styled.section`
  background: #EFF1F7;
  margin-top: 7rem;

  .cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    position: relative;
    justify-content: center;
    gap: 2rem;
    
    @media screen and (max-width: 1296px) {
      gap: 1rem;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const ShortenLink = styled.div`
  background-color: #3A3054;
  background-image: url('/images/bg-boost-desktop.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50% 55%;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 15px;
  width: 100%;
  margin-top: -3.7rem;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    button {
      width: 100% !important;
    }
  }    
`;

export const ShortenLinkResult = styled.div`
  margin: 40px 0;
  width: 100%;

  .item {
    background-color: #FFF;
    color: #34313D;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 15px 30px;
    align-items: center;
    margin-bottom: 20px;
  }

  .item__description {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 500px;

    @media screen and (max-width: 768px) {
      width: 100%;

      &:after {
        content: "";
        display: flex;
        margin-top: 20px;
        outline: 1px solid #CCC;
    
      }
    }    
  }
  
  .item__copy {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .shortlink {
      color: #2BD0D0;
      padding-right: 1.5rem;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column;

      button {
        width: 100% !important;
      }
    }
  }
`;
export const CardsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  
  .section-header {
    text-align: center;
  }
`;
export const SectionGetStarted = styled.section`
  background-color: #3A3054;
  background-image: url('./images/bg-boost-desktop.svg');
  background-repeat: no-repeat;
  background-position: 50% 55%;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;


  .title2 {
    font-size: 2.5rem;
    color: #fff;
    margin: 0 0 1.8rem 0;

    @media screen and (max-width: 768px) {
      font-size: 1.75rem;
    }
  }
`;

export const StyledLine = styled.div`
  width: 80%;
  height: 5px;
  background-color: rgb(42, 207, 207);
  position: absolute;
  top: 50%;
  left: 10%;

  @media screen and (max-width: 768px) {
    width: 5px;
    height: 80%;
    top: 0;
    left: 50%;
  }

  @media screen and (min-width: 769px) and (max-width: 1296px) {
    display: none;
  }
`;
