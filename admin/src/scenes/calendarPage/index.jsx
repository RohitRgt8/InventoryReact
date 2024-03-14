// import React from 'react';
// import { Box, useTheme } from "@mui/material";
// import MiniCalendar from "../../components/MiniCalendar"; // Import the MiniCalendar component
// //import Header from "../../components/Header";
// import { tokens } from "../../theme";

// const CalendarPage = () => { // Rename function component to start with uppercase letter
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
// //   return (
// //     <Box m="30px">
// //       {/* <Header title="Calendar" subtitle="Mini Calendar" /> Update title and subtitle */}
// //       <Box
// //         height="80vh"
// //         border={`1px solid ${colors.grey[100]}`}
// //         borderRadius="4px"
// //       >
// //         <MiniCalendar /> {/* Render the MiniCalendar component */}
// //       </Box>
// //     </Box>
// //   );
// // };

// return (
//   <Box m="30px" display="flex" justifyContent="center" alignItems="center">
//     <Box
//       height="80vh"
//       border={`1px solid ${colors.grey[100]}`}
//       borderRadius="4px"
//     >
//       <MiniCalendar /> {/* Render the MiniCalendar component */}
//     </Box>
//   </Box>
// );
// };

// export default CalendarPage;


import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import MiniCalendar from "../../components/MiniCalendar"; // Import the MiniCalendar component
import { tokens } from "../../theme";

const CalendarPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box 
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh" // Ensure the Box takes up the full viewport height
    >
      <Typography variant="h4" gutterBottom>
        Your Title
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80vh"
        width="80vw"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
        marginTop="10vh" // Adjusted marginTop to reduce height from the top
      >
        <MiniCalendar isDashboard={true} />
      </Box>
    </Box>
  );
};

export default CalendarPage;
