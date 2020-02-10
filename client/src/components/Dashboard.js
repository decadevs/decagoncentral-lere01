import React from "react";
import SideNav from "../components/SideNav";
import { DashboardDiv } from "./styledComponents";
import Dash from "./Dash";

const Dashboard = () => {
  return (
    <DashboardDiv>
      <SideNav />
      <Dash name="John"/>
    </DashboardDiv>
  );
};

export default Dashboard;
