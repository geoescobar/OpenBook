import React from "react";
import Dashboard from "./components/Dashboard";
import DataTables from "./components/DataTables";
import DatePicker from "./components/DatePicker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const routes = [
    {
      path: "/",
      exact: true,
      main: <Dashboard />,
    },
    {
      path: "/data-tables",
      main: <DataTables />,
    },
    {
      path: "/date-picker",
      main: <DatePicker />,
    },
  ];

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.main}
            exact={route.exact}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
