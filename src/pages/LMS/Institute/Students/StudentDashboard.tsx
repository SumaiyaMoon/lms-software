import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import SMDashboard from "../../../Layouts/SMDashboard";
import STCommunication from "../STCommunication";
import StudentProfile from "./StudentProfile";
import CourseCatalogue from "./CourseCatalogue";
import CourseRegistration from "./CourseRegistrationForm";
import StudentResult from "./StudentResult";
import SMTestDashboard from "../../../Layouts/SMTestDashboard";

export default function StudentDashboard(){

    const pages = [
      {
        text: "Course Catalogue",
        link: "coursecatalogue",
        // icon: <AllInboxIcon />,
      },
      {
        text: "Course Registration",
        link: "courseregistration",
        // icon: <MessageIcon />,
      },
      {
        text: "Student Result",
        link: "studentresult",
        // icon: <Settings />,
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
        {/* <Box>

        <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <h1>Student Dashboard</h1>
        <SMDashboard pages={pages} title="Student Dashboard" onLogout={()=>{}} dashboard="studentdashboard"/>
        
      </Grid>
    </Grid>
        <Routes>
        
        </Routes>
      </Box> */}
<Box>
        <SMTestDashboard menuItems={pages} >

        <Routes>
      <Route path="/coursecatalogue" element={<CourseCatalogue/>} />
      <Route path="/courseregistration" element={<CourseRegistration/>} />
      <Route path="/studentresult" element={<StudentResult/>} />
      <Route path="/studentprofile" element={<StudentProfile/>} />
      <Route path="/stcommunication" element={<STCommunication/>} />
      
        </Routes>
        </SMTestDashboard>

        
      </Box>
        </>
    )
}