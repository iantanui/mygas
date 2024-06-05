import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const TopBar = () => {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "white", color: "black", boxShadow: "none" }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div className="title">
          <Typography variant="h4">myGas</Typography>
          <Typography variant="p">Crystal management made easy</Typography>
        </div>

        <IconButton edge="end" color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
