import { Route, Routes } from "react-router-dom";
import ActivationPayment from "./AdminScreens/ActivationPayment";
import SMDashboard from "../../Layouts/SMDashboard";
import { Box, Grid } from "@mui/material";
import InstituteList from "./AdminScreens/InstituteList";

export default function AdminDashboard(){

    const pages = [
     
      {
        text: "InstituteList",
        link: "instituteList",
        // icon: <AllInboxIcon />,
      },
      {
        text: "Activation and Payment",
        link: "activationpayment",
        // icon: <AllInboxIcon />,
      },
    
    ];
    

    return(
        <>

         <Box>
        <SMDashboard menuItems={pages} >

        <Routes>
      <Route path="/instituteList" element={<InstituteList/>} />
      <Route path="/activationpayment" element={<ActivationPayment/>} />   
        </Routes>
        </SMDashboard>

        
      </Box>
        </>
    )
}