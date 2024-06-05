import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const TopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" style={{ flexGrow: 1 }}>
          myGas
        </Typography>
        <IconButton edge="end" color="inherit">
            <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;