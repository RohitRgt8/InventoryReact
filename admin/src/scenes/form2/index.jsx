import { Alert, Box, Button, TextField, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from 'react'; 
import axios from 'axios';
import { axiosInstance } from "../../data/api";
import { useNavigate } from "react-router";

const Form2 = () => {
  const theme = useTheme(); // Use the useTheme hook to access the current theme
  const isNonMobile = useMediaQuery(theme.breakpoints.up("sm")); // Use theme breakpoints
  const navigate = useNavigate()
  const [customerData, setCustomerData] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false)

  const handleFormSubmit = (values) => {
    console.log(values);
    axiosInstance({
      method: "POST",
      url:"/customer",
      data:{
        name: values.firstName,
        address: values.address1,
        phone: values.contact,
        email: values.email,
        designation: values.designation
      },
    }).then((response)=>{
      const newCustomer=response.data;
      setCustomerData([customerData,newCustomer]);
      setSuccessMessage(`Employee added successfully!`);
        setTimeout(() => {
          navigate('/contacts');
        }, 2000);
      }).catch((error) => {
        if (error.response) {
          console.log(error.response);
          setSuccessMessage(`Employee addition failed!`);
          }
      })
      setTimeout(() => {
        setSuccessMessage(null);
      }, 4000);
  };

  return (
    <>
    <Box m="20px">
      <Header title="New customer" subtitle="Add new customer" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Designation"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.designation}
                name="designation"
                error={!!touched.designation && !!errors.designation}
                helperText={touched.designation && errors.designation}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="primary" variant="contained">
                Add New customer
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
    <div>
    {successMessage && <Alert severity="success">{successMessage}</Alert>}
  </div>
  </>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  designation: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  age: 0,
  email: "",
  contact: "",
  address1: "",
  designation: "",
};

export default Form2;
