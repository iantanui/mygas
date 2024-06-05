import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import GridViewOutlined from "@mui/icons-material/Home";
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
        color: "black",
        boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
        zIndex: 100,
      }}
    >
      <BottomNavigationAction
        label="Dashboard"
        value="dashboard"
        icon={<GridViewOutlined />}
        style={{
          color: "black",
        }}
      />
      <BottomNavigationAction
        label="Products"
        value="products"
        icon={<ListIcon />}
        style={{
          color: "black",
        }}
      />
      <BottomNavigationAction
        label="Refills"
        value="refills"
        icon={<LocalGasStationIcon />}
        style={{
          color: "black",
        }}
      />
      <BottomNavigationAction
        label="Management"
        value="management"
        icon={<ManageAccountsIcon />}
        style={{
          color: "black",
        }}
      />
    </BottomNavigation>
  );
};

export default BotttomBar;
