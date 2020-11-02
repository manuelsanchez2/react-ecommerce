import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, handler }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={handler}>
      <Icon onClick={handler}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Computers</SidebarLink>
        <SidebarLink to="/">Keyboards</SidebarLink>
        <SidebarLink to="/">Mice</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
