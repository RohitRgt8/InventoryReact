// Products.js
import React, { useState, useEffect } from 'react';
import { Box, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import axios from "axios";
import Header from "../../components/Header";
import Form from "../form";
import ProductImage from './productimage';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../data/api';

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "Product Id" },
    { field: "name", headerName: "Product Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "price", headerName: "Price", type: "number", headerAlign: "left", align: "left" },
    { field: "qty", headerName: "Quantity", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    { field: "img", headerName: "Image", flex: 1, renderCell: (params) => <ProductImage imageUrl={params.value} altText="Product Image" /> }
  ];
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axiosInstance({
        method: "GET",
        url:"/get-products",
      }).then((response)=>{
        const data = response.data
        setProductData(data)
      }).catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          }
      })
    };

    fetchData();
  }, []);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Products" subtitle="Product Details" />
        <Button 
          variant="contained" 
          color="primary" 
          style={{ 
            padding: '10px 20px', 
            color: 'white', 
            backgroundColor: '#535ac8',
            borderRadius: '20px',
          }}
          onClick={() => navigate('/form')}
        >
          Add New Product
        </Button>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="space-evenly" mt={2}>
        {/* {productData.map((product, index) => (
          <div key={index}>
            <ProductImage imageUrl={`${product.img}`} altText="Product Image" />
          </div>
        ))} */}
        {Array.isArray(productData) && productData.map((product, index) => (
  <div key={index}>
    <ProductImage imageUrl={`${product.img}`} altText="Product Image" />
  </div>
))}

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
            color: colors.greenAccent[400],
            fontSize: "12px",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={productData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Products;
