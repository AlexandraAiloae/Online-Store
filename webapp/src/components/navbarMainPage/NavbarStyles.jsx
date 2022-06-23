import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  z-index: 2;
  position: absolute;
  color: #fff;
  font-family: "Segoe Print", cursive;
`;

export const LogoNavbar = styled.div`
  color: #fff;
`;

export const NavbarMenu = styled.ul`
  display: flex;
  font-size: 1.5rem;
`;

export const NavbarLink = styled(Link)`
  align-items: center;
  cursor: pointer;
`;

export const NavbarList = styled.li`
  padding: 0 1rem;
  cursor: pointer;
`;
