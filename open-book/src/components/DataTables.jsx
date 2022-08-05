import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ApprovedTable } from "./subcomponents/admin/ApprovedTable";
import { PendingTable } from "./subcomponents/admin/PendingTable";
import { DeniedTable } from "./subcomponents/admin/DeniedTable";
import Navbar from "./subcomponents/admin/Navbar";
import Container from "@mui/material/Container";
import { useEffect } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DataTables() {
  const [value, setValue] = React.useState(0);

  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const currentTab = params.get("status");

  useEffect(() => {
    if (currentTab === "pending") {
      setValue(0);
    } else if (currentTab === "approved") {
      setValue(1);
    } else if (currentTab === "denied") {
      setValue(2);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Navbar />
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 2, pb: 4 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Manage Appointments
        </Typography>
      </Container>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Pending" {...a11yProps(0)} />
          <Tab label="Approved" {...a11yProps(1)} />
          <Tab label="Denied" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PendingTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ApprovedTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DeniedTable />
      </TabPanel>
    </Box>
  );
}
