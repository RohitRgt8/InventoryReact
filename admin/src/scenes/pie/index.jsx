import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Degree Cost Incurred in Different Expenditure" subtitle={<span style={{ color: '#c76832' }}>Total Cost: Rs. 8000</span>}/>
      
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
