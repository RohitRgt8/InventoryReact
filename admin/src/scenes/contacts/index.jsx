import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import Form2 from "../form2";
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react"
import axios from "axios"
import { axiosInstance } from "../../data/api";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    // { field: "id", headerName: "Slno", flex: 0.5 },
    { field: "id", headerName: "Customer Id" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    // {
    //   field: "age",
    //   headerName: "Age",
    //   type: "number",
    //   headerAlign: "left",
    //   align: "left",
    // },

    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    // {
    //   field: "city",
    //   headerName: "City",
    //   flex: 1,
    // },
    // {
    //   field: "zipCode",
    //   headerName: "Order Details",
    //   flex: 1,
    // },
  ];
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState([]);

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
        url:"/get-customers",
      }).then((response)=>{
        const data = response.data
        setCustomerData(data)
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
     <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="Customer Details"/>
      <button 
        variant="contained" 
        color="primary" 
        style={{ 
          padding: '10px 20px', 
          color: 'white', 
          backgroundColor: '#f79752',
          borderRadius: '20px', 
        }}
        onClick={() => navigate('/form2')}
      >
        Add New Customer
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={customerData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
