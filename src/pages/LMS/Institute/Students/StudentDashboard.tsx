import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import SMDashboard from "../../../Layouts/SMDashboard";
import STCommunication from "../STCommunication";
import StudentProfile from "./StudentProfile";
import CourseCatalogue from "./CourseCatalogue";
import CourseRegistration from "./CourseRegistrationForm";
import StudentResult from "./StudentResult";

export default function StudentDashboard(){

    const pages = [
      {
        name: "Course Catalogue",
        route: "coursecatalogue",
        // icon: <AllInboxIcon />,
      },
      {
        name: "Course Registration",
        route: "courseregistration",
        // icon: <MessageIcon />,
      },
      {
        name: "Student Result",
        route: "studentresult",
        // icon: <Settings />,
      },
      {
        name: "Student Profile",
        route: "studentprofile",
      },
      {
        name: "Communication",
        route: "stcommunication",
      },
    
    ];
    

    return(
        <>
        <Box>

        <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <h1>Student Dashboard</h1>
        <SMDashboard pages={pages} title="Student Dashboard" onLogout={()=>{}} dashboard="studentdashboard"/>
        
      </Grid>
    </Grid>
        <Routes>
            <Route path="coursecatalogue" element={<CourseCatalogue/>} />
            <Route path="courseregistration" element={<CourseRegistration/>} />
            <Route path="studentresult" element={<StudentResult/>} />
            <Route path="studentprofile" element={<StudentProfile/>} />
            <Route path="stcommunication" element={<STCommunication/>} />

        </Routes>
        </Box>
        </>
    )
}