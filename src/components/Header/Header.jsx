import { useState } from 'react';
import { Logo, StyledHeader, MenuNav, UnorderedList, MenuCollapse, StyledDivider } from './Header.styles';
import MenuIcon from '@mui/icons-material/Menu';
import Button, { Shape } from '../Button/Button';

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const handleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <StyledHeader>
      <div className="container">
        <Logo>
          <a href=".">
            <img src="./src/assets/images/logo.svg" alt="Shortly logo" />
          </a>

          <MenuCollapse onClick={handleMenu}>
            <MenuIcon></MenuIcon>
          </MenuCollapse>
        </Logo>

        <MenuNav $collapse={isCollapsed}>
          <UnorderedList>
            <li><a href=".">Features</a></li>
            <li><a href=".">Pricing</a></li>
            <li><a href=".">Resources</a></li>
          </UnorderedList>
          <StyledDivider></StyledDivider>
          <UnorderedList className='login'>
            <li><a href=".">Login</a></li>
            <li>
              <Button 
                id="SignIn__Button"
                shape={Shape.circle}
                bgcolor="#2BD0D0"
                text="Sign in"  />
            </li>
          </UnorderedList>
        </MenuNav>
      </div>
    </StyledHeader>
  );
};

export default Header;