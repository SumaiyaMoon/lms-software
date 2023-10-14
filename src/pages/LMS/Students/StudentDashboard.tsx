import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import SMDashboard from "../../Layouts/SMDashboard";
import STCommunication from "../../STCommunication";
import StudentProfile from "./StudentScreens/StudentProfile";
import CourseCatalogue from "./StudentScreens/CourseCatalogue";
import CourseRegistration from "./StudentScreens/CourseRegistrationForm";
import StudentResult from "./StudentScreens/StudentResult";


export default function StudentDashboard(){

    const pages = [
      {
        text: "Course Catalogue",
        link: "coursecatalogue",
      },
      {
        text: "Course Registration",
        link: "courseregistration",
      },
      {
        text: "Student Result",
        link: "studentresult",
      },
      {
        text: "Student Profile",
        link: "studentprofile",
      },
      {
        text: "Communication",
        link: "stcommunication",
      },
    
    ];
    

    return(
        <>
<Box>
        <SMDashboard menuItems={pages} >

        <Routes>
      <Route path="/coursecatalogue" element={<CourseCatalogue/>} />
      <Route path="/courseregistration" element={<CourseRegistration/>} />
      <Route path="/studentresult" element={<StudentResult/>} />
      <Route path="/studentprofile" element={<StudentProfile/>} />
      <Route path="/stcommunication" element={<STCommunication/>} />
      
        </Routes>
        </SMDashboard>

        
      </Box>
        </>
    )
}