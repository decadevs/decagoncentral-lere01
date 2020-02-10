import React from "react";
import { Menu, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Dashlogo from "../images/dashlogo.svg";
import Createlogo from "../images/createlogo.png";
import Profilelogo from "../images/profilelogo.png";
import Tasklogo from "../images/tasklogo.png";
import CreateTeamlogo from "../images/createteamlogo.png";
import {
  NavigationItem,
  NavBarList,
} from "../components/styledComponents";

const SideNav = () => (
  <Sidebar
    as={Menu}
    animation="overlay"
    icon="labeled"
    inverted
    vertical
    visible
    width="thin"
    padding-top="5rem"
  >
    <NavBarList>
      <Menu.Item>
        <img className="nav-logo" src={logo} alt="" />
      </Menu.Item>

      <Menu.Item as={Link} to="/dashboard">
        <NavigationItem className="dashboard-link">
          <img src={Dashlogo} alt="" />
          Dashboard
        </NavigationItem>
      </Menu.Item>

      <Menu.Item as={Link} to="/signup">
        <NavigationItem>
          <img src={Createlogo} alt="" />
          Create Profile
        </NavigationItem>
      </Menu.Item>

      <Menu.Item as={Link} to="">
        <NavigationItem>
          <img src={Profilelogo} alt="" />
          My Profile
        </NavigationItem>
      </Menu.Item>

      <Menu.Item as={Link} to="">
        <NavigationItem>
          <img src={Tasklogo} alt="" />
          Task
        </NavigationItem>
      </Menu.Item>

      <Menu.Item as={Link} to="">
        <NavigationItem>
          <img src={CreateTeamlogo} alt="" />
          Create Team
        </NavigationItem>
      </Menu.Item>
    </NavBarList>
  </Sidebar>
);

export default SideNav;
