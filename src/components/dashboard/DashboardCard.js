import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const DashboardCard = ({ icon, label, value, bottom }) => {
  return (
    <Card>
      <CardContent>
        <Box>
          <Typography>{label}</Typography>
          {icon}
        </Box>
        <Box>
          <Typography>{value}</Typography>
        </Box>
        <Typography>{bottom}</Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
