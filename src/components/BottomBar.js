import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import GasMeterOutlinedIcon from "@mui/icons-material/GasMeterOutlined";
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';


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
        icon={<GridViewOutlinedIcon />}
        style={{
          color: "black",
        }}
      />
      <BottomNavigationAction
        label="Products"
        value="products"
        icon={<GasMeterOutlinedIcon />}
        style={{
          color: "black",
        }}
      />
      <BottomNavigationAction
        label="Refills"
        value="refills"
        icon={<PublishedWithChangesOutlinedIcon />}
        style={{
          color: "black",
        }}
      />
      <BottomNavigationAction
        label="Management"
        value="management"
        icon={<TuneOutlinedIcon/>}
        style={{
          color: "black",
        }}
      />
    </BottomNavigation>
  );
};

export default BotttomBar;
