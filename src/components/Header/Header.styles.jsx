import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 0;

  @media screen and (max-width: 825px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex: initial;
  width: 125px;
  align-self: center;

  a {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    left: 30px;
  }
`;

export const MenuNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: auto;
  align-items: center;
  color: rgb(152,152,152);
  width: ${(props) => props.$collapse ? 'calc(100% - 125px)' : 'auto'};

  @media screen and (max-width: 768px) {
    display: ${(props) => props.$collapse ? 'flex' : 'none'};
    list-style: none;
    margin: 0;
    text-align: center;
    flex-direction: column;
    border-radius: 0.625rem;
    background: #3A3054;
    padding: 1.5rem;
    margin-top: 3.46rem;
    min-width: 200px;
    align-self: center;

    ul {
      flex-direction: column;
    }
  }
`;

export const UnorderedList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  align-items: center;

  li {
    display: inline;
    padding-right: 1.8rem;
  }

  @media screen and (max-width: 768px) {
    list-style: none;
    margin: 0;
    text-align: center;
    padding: 0;

    li {
      display: block;
      padding: 5px 0;

      a {
        font-size: 1.125rem;
        color: #fff;
      }
    }
  }
`;

export const MenuCollapse = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 30px;
  }
`;

export const StyledDivider = styled.hr`
  width: 100%;
  opacity: 0.25;
  background: #9E9AA8;
  margin: 1.88rem 0;
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
  }
`;