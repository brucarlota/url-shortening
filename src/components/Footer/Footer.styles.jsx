import { styled } from "styled-components";

export const StyledFooter = styled.div`
  background: #232127;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4.5rem 0;

  li {
    list-style: none;
    margin: 0;
  }

  .title2 {
    color: #fff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.01563rem;
    margin: 0;
  }

  .logo {
    @media screen and (max-width: 768px) {
      width: 100%;
      margin-bottom: 2rem;
    }
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;

    ul {
      padding: 0;
    }

    li {
      font-size: 0.9375rem;
      cursor: pointer;
      padding-bottom: 8px;

      &:hover {
        color: #2BD0D0; 
      }
    }

    @media screen and (max-width: 768px) {
      gap: 2.5rem;

      div {
        width: 100%;
      }
    }
  }

  .social-media {
    display: flex;

    ul {
      display: flex;
      padding: 0;
      gap: 1rem;
      margin: 0;

      li {
        &:hover {
          background: #2BD0D0; 
        }
      }
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      margin-top: 2.5rem;
      justify-content: center;
    }
  }
`;