import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import Form1 from "../form1";
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react"
import axios from "axios";
import { axiosInstance } from "../../data/api";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "EMPID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    // {
    //   field: "address",
    //   headerName: "Address",
    //   flex: 1,
    // },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
   
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    // {
    //   field: "accessLevel",
    //   headerName: "Designation",
    //   flex: 1,
    //   renderCell: ({ row: { access } }) => {
    //     return (
    //       <Box
    //         width="60%"
    //         m="0 auto"
    //         p="5px"
    //         display="flex"
    //         justifyContent="center"
    //         backgroundColor={
    //           access === "admin"
    //             ? colors.greenAccent[600]
    //             : access === "manager"
    //             ? colors.greenAccent[700]
    //             : colors.greenAccent[700]
    //         }
    //         borderRadius="4px"
    //       >
    //         {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
    //         {access === "manager" && <SecurityOutlinedIcon />}
    //         {access === "user" && <LockOpenOutlinedIcon />}
    //         <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
    //           {access}
    //         </Typography>
    //       </Box>
    //     );
    //   },
    // },
  ];

  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   // Make an Axios GET request to fetch employee data from the backend
      //   const response = await axios.get('http://127.0.0.1:8000/employee/');
      //   // Assuming your backend returns an array of employee data
      //   setEmployeeData(response.data);
      // } catch (error) {
      //   console.error('Error fetching employee data:', error);
      // }
      axiosInstance({
        method: "GET",
        url:"/get-employees",
      }).then((response)=>{
        const data = response.data
        setEmployeeData(data)
      }).catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          }
      })
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);
  return (
    <Box m="20px">
      {/* <Header title="EMPLOYEE" subtitle="Employee Details" /> */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="Employee" subtitle={<span style={{ color: '#c76832'}}>Employee Details</span>}/>
      <button 
        variant="contained" 
        color="primary" 
        style={{ 
          padding: '10px 20px', 
          color: 'white', 
          backgroundColor: '#f79752',
          borderRadius: '20px', // Adjust the value to control the curve
        }}
        onClick={() => navigate('/form1')}
      >
        Add New Employee
      </button>
    </Box>
    <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: '#f79752',
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: '#f79752',
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={employeeData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
