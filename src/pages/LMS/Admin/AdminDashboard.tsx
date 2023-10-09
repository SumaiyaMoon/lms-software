import { Route, Routes } from "react-router-dom";
import ActivationPayment from "./AdminScreens/ActivationPayment";
import CourseManagement from "./AdminScreens/CourseManagement";
import FinancialManagement from "./AdminScreens/FinancialManagement";
import InstituteManagement from "./AdminScreens/InstituteManagement";
import RegistrationManagement from "./AdminScreens/RegistrationManagement";
import ResourceManagement from "./AdminScreens/ResourceManagement";
import StudentManagement from "./AdminScreens/StudentManagement";
import TeacherManagement from "./AdminScreens/TeacherManagement";
import SMDashboard from "../../Layouts/SMDashboard";
import { Box, Grid } from "@mui/material";

export default function AdminDashboard(){

    const pages = [
      {
        name: "Activation and Payment",
        route: "activationpayment",
        // icon: <AllInboxIcon />,
      },
      {
        name: "Course Management",
        route: "coursemanagement",
        // icon: <MessageIcon />,
      },
      {
        name: "Financial Management",
        route: "financialmanagement",
        // icon: <Settings />,
      },
      {
        name: "Institute Management",
        route: "institutemanagement",
      },
      {
        name: "Registration Management",
        route: "registrationmanagement",
      },
      {
        name: "Resource Management",
        route: "resourcemanagement",
      },
      {
        name: "Student Management",
        route: "studentmanagement",
      },
      {
        name: "Teacher Management",
        route: "teachermanagement",
      },
    
    ];
    

    return(
        <>
        <Box>

        <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <h1>AdminDashboard</h1>
        <SMDashboard pages={pages} title="Admin Dashboard" onLogout={()=>{}} dashboard="admindashboard"/>
        
      </Grid>
    </Grid>
        <Routes>
            <Route path="activationpayment" element={<ActivationPayment/>} />
            <Route path="coursemanagement" element={<CourseManagement/>} />
            <Route path="financialmanagement" element={<FinancialManagement/>} />
            <Route path="institutemanagement" element={<InstituteManagement/>} />
            <Route path="registrationmanagement" element={<RegistrationManagement/>} />
            <Route path="resourcemanagement" element={<ResourceManagement/>} />
            <Route path="studentmanagement" element={<StudentManagement/>} />
            <Route path="teachermanagement" element={<TeacherManagement/>} />
        </Routes>
        </Box>
        </>
    )
}