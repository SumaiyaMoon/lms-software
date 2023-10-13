import { Box, Typography } from "@mui/material";
import SMTestDashboard from "../Layouts/SMTestDashboard";
import { Route, Routes } from "react-router-dom";
import NotificationComp from "./dashscr/dash1sc";

export default function dashComp() {
    const menu = [
        { text: 'Reg Form', link: 'd1' },
    ]
  return (
    <>
      <Box>
        <SMTestDashboard menuItems={menu} >

        <Routes>
            <Route path="/d1" element={<NotificationComp/>}/>
        </Routes>
        </SMTestDashboard>

        
      </Box>
    </>
  );
}