import { Box } from "@mui/material";
import Header from "../../components/Header";
import CustomBarChart from "../../components/newr";

const S = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <CustomBarChart />
      </Box>
    </Box>
  );
};

export default S;
