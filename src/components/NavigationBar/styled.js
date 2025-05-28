import styled from "styled-components";
import { Link } from "react-scroll";
import { ReactComponent as FacebookIconLink } from "../SvgIcons/facebookIcon.svg";
import { ReactComponent as InstagramIconLink } from "../SvgIcons/instagramIcon.svg";


export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px); 
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

        @media (max-width: 1050px) {
        height: 60px;
        background-color: white;
        backdrop-filter: none;
  }
`;

export const NavWrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

export const NavLogo = styled.img`
    height: auto;
    width: 85px;
    cursor: pointer;
    margin-top: 4px;

    @media (max-width: 1050px) {
         height: 50px;
         width: 50px;
         margin-top: 4px;
    }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 20px;
  align-items: center;

   @media (max-width: 1050px) {
        display: none;
  }
`;

export const NavItem = styled(Link)`
  font-weight: 500;
  cursor: pointer;
  color: white;
  text-decoration: none;
  transition: color 0.2s ease;
  text-transform: uppercase;
  text-align: center;

     @media (max-width: 1050px) {
        color: black;
  }

  &:hover {
    color:rgb(221, 221, 221);

         @media (max-width: 1050px) {
        color:rgb(107, 107, 107);
  }
  }
`;

export const Burger = styled.div`
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;

    div {
        width: 25px;
        height: 3px;
        background: black;
        border-radius: 2px;
    }


      @media (max-width: 1050px) {
        display: flex;
  }
`;

export const MobileMenu = styled.div`
    display: none;

    @media (max-width: 1050px) {
        display: ${({ $open }) => ($open ? "flex" : "none")};
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        flex-direction: column;
        align-items:center;
        background-color: white;
        padding: 20px 0;
        gap: 15px;
        z-index: 999;
    }
`;

export const NavIcons = styled.div`
    display: flex;
    gap: 20px;

          @media (max-width: 1050px) {
        display: none;
  }
`;

export const FacebookIcon = styled(FacebookIconLink)`
    width: 48px;
    height: 48px;
    color: white;
    transition: color 0.3s;

        &:hover {
        color:rgb(221, 221, 221);
    }
`;

export const InstagramIcon = styled(InstagramIconLink)`
    width: 48px;
    height: 48px;
    color: white;
    transition: color 0.3s;

        &:hover {
        color:rgb(221, 221, 221);
    }
`;


