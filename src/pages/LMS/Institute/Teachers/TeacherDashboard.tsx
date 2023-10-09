import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import SMDashboard from "../../../Layouts/SMDashboard";
import AssessmentCreation from "./AssessmentCreation";
import CourseCreation from "./CourseCreation";
import GradeBook from "./GradeBook";
import TeacherProfile from "./TeacherProfile";
import STCommunication from "../STCommunication";

export default function TeacherDashboard(){

    const pages = [
      {
        name: "Assessment Creation",
        route: "assessmentcreation",
        // icon: <AllInboxIcon />,
      },
      {
        name: "Course Creation",
        route: "coursecreation",
        // icon: <MessageIcon />,
      },
      {
        name: "Gradebook",
        route: "gradebook",
        // icon: <Settings />,
      },
      {
        name: "Teacher Profile",
        route: "teacherprofile",
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
        <h1>Teacher Dashboard</h1>
        <SMDashboard pages={pages} title="Teacher Dashboard" onLogout={()=>{}} dashboard="teacherdashboard"/>
        
      </Grid>
    </Grid>
        <Routes>
            <Route path="assessmentcreation" element={<AssessmentCreation/>} />
            <Route path="coursecreation" element={<CourseCreation/>} />
            <Route path="gradebook" element={<GradeBook/>} />
            <Route path="teacherprofile" element={<TeacherProfile/>} />
            <Route path="stcommunication" element={<STCommunication/>} />

        </Routes>
        </Box>
        </>
    )
}