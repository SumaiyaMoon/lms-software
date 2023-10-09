import { Route, Routes } from "react-router-dom";
import SMDashboard from "../../Layouts/SMDashboard";
import { Box, Grid } from "@mui/material";
import InstituteProfile from "./InstituteScreens/InstituteProfile";
import StudentDetail from "./InstituteScreens/StudentManagement/StudentDetail";
import StudentList from "./InstituteScreens/StudentManagement/StudentList";
import CourseList from "./InstituteScreens/Courses/CourseList";
import Assessments from "./InstituteScreens/Courses/Assessments";
import Quiz from "./InstituteScreens/Courses/Quiz";
import STRegistrationControl from "./InstituteScreens/STRegistrationControl";

export default function InstituteDashboard(){

    const pages = [
      {
        name: "Institute Profile",
        route: "instituteprofile",
        // icon: <AllInboxIcon />,
      },
      {
        name: "Student List",
        route: "studentlist",
        // icon: <MessageIcon />,
      },
      {
        name: "Course List",
        route: "courselist",
        // icon: <Settings />,
      },
      {
        name: "Quiz",
        route: "quiz",
      },
      {
        name: "Assessments",
        route: "assessments",
      },
      {
        name: "Registration Control",
        route: "stregistrationcontrol",
      },
    ];
    

    return(
        <>
        <Box>

        <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <h1>Institute Dashboard</h1>
        <SMDashboard pages={pages} title="Institute Dashboard" onLogout={()=>{}} dashboard="institutedashboard"/>
        
      </Grid>
    </Grid>
        <Routes>
            <Route path="instituteprofile" element={<InstituteProfile/>} />
            <Route path="studentdetail" element={<StudentDetail/>} />
            <Route path="studentlist" element={<StudentList/>} />
            <Route path="studentlist/:id" element={<StudentList/>} />
            <Route path="courselist" element={<CourseList/>} />
            <Route path="assessments" element={<Assessments/>} />
            <Route path="quiz" element={<Quiz/>} />
            <Route path="stregistrationcontrol" element={<STRegistrationControl/>} />
        </Routes>
        </Box>
        </>
    )
}