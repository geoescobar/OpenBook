import React from "react";
import Navbar from "./subcomponents/admin/Navbar";
import StatCard from "./subcomponents/admin/StatCards";
import TableTabs from "./subcomponents/admin/Tabs";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <StatCard />
      <TableTabs />
    </div>
  );
}

export default Dashboard;
