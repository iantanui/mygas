import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import DashboardCard from "../components/dashboard/DashboardCard";

const Dashboard = () => {
  return (
    <Container>
      <Typography>Dashboard</Typography>

      <Grid>
        <Grid>
          <DashboardCard />
        </Grid>
        <Grid>
          <DashboardCard />
        </Grid>
        <Grid>
          <DashboardCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;