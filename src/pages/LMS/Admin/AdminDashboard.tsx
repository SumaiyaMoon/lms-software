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
import InstituteList from "./AdminScreens/InstituteList";
import SMTestDashboard from "../../Layouts/SMTestDashboard";

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
      {
        text: "Course Management",
        link: "coursemanagement",
        // icon: <MessageIcon />,
      },
      {
        text: "Financial Management",
        link: "financialmanagement",
        // icon: <Settings />,
      },
      {
        text: "Institute Management",
        link: "institutemanagement",
      },
      {
        text: "Registration Management",
        link: "registrationmanagement",
      },
      {
        text: "Resource Management",
        link: "resourcemanagement",
      },
      {
        text: "Student Management",
        link: "studentmanagement",
      },
      {
        text: "Teacher Management",
        link: "teachermanagement",
      },
    
    ];
    

    return(
        <>

         <Box>
        <SMTestDashboard menuItems={pages} >

        <Routes>
      <Route path="/instituteList" element={<InstituteList/>} />
      <Route path="/activationpayment" element={<ActivationPayment/>} />
      <Route path="/coursemanagement" element={<CourseManagement/>} />
      <Route path="/financialmanagement" element={<FinancialManagement/>} />
      <Route path="/institutemanagement" element={<InstituteManagement/>} />
      <Route path="/registrationmanagement" element={<RegistrationManagement/>} />
      <Route path="/resourcemanagement" element={<ResourceManagement/>} />
      <Route path="/studentmanagement" element={<StudentManagement/>} />
      <Route path="/teachermanagement" element={<TeacherManagement/>} />
   
        </Routes>
        </SMTestDashboard>

        
      </Box>
        </>
    )
}