import React, { useState } from "react";
import { AppBar, Tabs, Tab, Box, Typography, Container } from "@mui/material";
import ProductsScreen from "./ProductsScreen";
import RefillsScreen from "./RefillsScreen";
import CustomersScreen from "./CustomerScreen"; // This component needs to be created

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const Management = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="management tabs"
        >
          <Tab label="Products" />
          <Tab label="Refills" />
          <Tab label="Customers" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProductsScreen />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RefillsScreen />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CustomersScreen />
      </TabPanel>
    </Container>
  );
};

export default Management;