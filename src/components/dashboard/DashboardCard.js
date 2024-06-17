import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const DashboardCard = ({ icon, label, value, bottom }) => {
  return (
    <Card
      style={{
        height: "120px",
        backgroundColor: "white",
        border: "1px solid lightgray",
        borderRadius: '10px'
      }}
    >
      <CardContent style={{ padding: "8px" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="black">
            {label}
          </Typography>
          {icon}
        </Box>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          my={2}
        >
          <Typography variant="h6" color="black" fontWeight="bold">
            {value}
          </Typography>
        </Box>
        <Typography variant="caption" color="gray" align="center">
          {bottom}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
