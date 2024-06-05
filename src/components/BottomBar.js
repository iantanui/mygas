import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const BotttomBar = ({ value, onchange }) => {
  return (
    <BottomNavigation
      value={value}
      onChange={onchange}
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
        boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
        zIndex: 100,
      }}
    >
      <BottomNavigationAction
        label="Dashboard"
        value="dashboard"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Products"
        value="products"
        icon={<ListIcon />}
      />
      <BottomNavigationAction
        label="Refills"
        value="refills"
        icon={<LocalGasStationIcon />}
      />
      <BottomNavigationAction
        label="Management"
        value="management"
        icon={<ManageAccountsIcon />}
      />
    </BottomNavigation>
  );
};

export default BotttomBar;
