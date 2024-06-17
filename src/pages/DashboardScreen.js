import { Container, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import DashboardCard from "../components/dashboard/DashboardCard";
import { List, Menu, Person } from "@mui/icons-material";
import { ProductContext } from "../components/products/ProductContext";
import { RefillContext } from "../components/refills/RefillContext";

const Dashboard = () => {
  const { products } = useContext(ProductContext);
  const { refills } = useContext(RefillContext);

  const totalProducts = products.length;
  const totalRefills = refills.length;
  const totalCustomers = [
    ...new Set(refills.map((refill) => refill.customerName)),
  ].length;

  return (
    <Container style={{ padding: "8px", backgroundColor: "white" }}>
      <Typography variant="h6" color="black" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <DashboardCard
            icon={<List />}
            label="Total products"
            value={totalProducts}
            bottom="Products in the shop"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DashboardCard
            icon={<Menu />}
            label="Total Refills"
            value={totalRefills}
            bottom="Refills made today"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DashboardCard
            icon={<Person />}
            label="Total Customers"
            value={totalCustomers}
            bottom="Customers today"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
