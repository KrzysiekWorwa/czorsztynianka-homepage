import styled from "styled-components";
import { Link } from "react-scroll";


export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background-color: white;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavWrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavLogo = styled.img`
    height: 80px;
    width: 80px;
    cursor: pointer;
    margin: 0;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavItem = styled(Link)`
  font-weight: 500;
  cursor: pointer;
  color: #252525;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #666;
  }
`


