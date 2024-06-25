import { Container, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import DashboardCard from "../components/dashboard/DashboardCard";
import { AttachMoney, List, Menu, Person } from "@mui/icons-material";
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

  // Calculate revenue metrics
  const totalGrossRevenue = refills.reduce(
    (acc, refill) => acc + refill.buyingPrice,
    0
  );
  const totalNetRevenue = products.reduce(
    (acc, product) => acc + product.price,
    0
  );
  const totalCommission = totalGrossRevenue - totalNetRevenue;

  return (
    <Container style={{ padding: "8px", backgroundColor: "white" }}>
      <Typography variant="h6" color="black" gutterBottom>
        Summary
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

        <Typography
          variant="h6"
          color="black"
          gutterBottom
          style={{ marginLeft: "1rem", marginTop: "1rem", padding: "4px" }}
        >
          Revenue Summary
        </Typography>

        <Grid item xs={12} sm={4}>
          <DashboardCard
            icon={<AttachMoney />}
            label="Total Gross Revenue"
            value={totalGrossRevenue}
            bottom="Total revenue from refills"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DashboardCard
            icon={<AttachMoney />}
            label="Total Net Revenue"
            value={totalNetRevenue}
            bottom="Total revenue from products"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DashboardCard
            icon={<AttachMoney />}
            label="Total Commission"
            value={totalCommission}
            bottom="Commission earned"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
