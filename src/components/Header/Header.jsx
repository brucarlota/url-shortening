import { useState } from 'react';
import { Logo, StyledHeader, MenuNav, UnorderedList, MenuCollapse, StyledDivider } from './Header.styles';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const handleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <StyledHeader>
      <Logo>
        <a href="#">
          <img src="./src/assets/images/logo.svg" alt="" />
        </a>
      </Logo>

      <MenuCollapse onClick={handleMenu}>
        <MenuIcon></MenuIcon>
      </MenuCollapse>

      <MenuNav collapse={isCollapsed}>
        <UnorderedList>
          <li><a href="">Features</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Resources</a></li>
        </UnorderedList>
        <StyledDivider></StyledDivider>
        <UnorderedList>
          <li><a href="">Login</a></li>
          <li><a href="">Sign Up</a></li>
        </UnorderedList>
      </MenuNav>
    </StyledHeader>
  )
}
