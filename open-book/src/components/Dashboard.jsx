import React from "react";
import ButtonAppBar from "./subcomponents/Navbar";
import BasicCard from "./subcomponents/StatCards";
import BasicTabs from "./subcomponents/Tabs";


function Dashboard() {
  return (
    <div>
      <ButtonAppBar />
      <BasicCard />
      <BasicTabs />
    </div>
  );
}

export default Dashboard;
