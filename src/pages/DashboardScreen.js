import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import DashboardCard from "../components/dashboard/DashboardCard";

const Dashboard = () => {
  return (
    <Container style={{ padding: "8px", backgroundColor: "white" }}>
      <Typography variant="h6" color="black" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <DashboardCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DashboardCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DashboardCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
