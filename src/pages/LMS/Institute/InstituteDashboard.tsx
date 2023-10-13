import { Route, Routes } from "react-router-dom";
import SMDashboard from "../../Layouts/SMDashboard";
import { Box, Grid } from "@mui/material";
import InstituteProfile from "./InstituteScreens/InstituteProfile";
import StudentDetail from "./InstituteScreens/StudentManagement/StudentDetail";
import StudentList from "./InstituteScreens/StudentManagement/StudentList";
import CourseList from "./InstituteScreens/Courses/CourseList";
import Assessments from "./InstituteScreens/Courses/Assessments";
import STRegistrationControl from "./InstituteScreens/STRegistrationControl";
import QuizList from "./InstituteScreens/Courses/QuizList";
import SMTestDashboard from "../../Layouts/SMTestDashboard";

export default function InstituteDashboard(){

    const pages = [
      {
        text: "Institute Profile",
        link: "instituteprofile",
        // icon: <AllInboxIcon />,
      },
      {
        text: "Student List",
        link: "studentlist",
        // icon: <MessageIcon />,
      },
      {
        text: "Course List",
        link: "courselist",
        // icon: <Settings />,
      },
      {
        text: "Quiz List",
        link: "quizlist",
      },
      {
        text: "Assessments",
        link: "assessments",
      },
      {
        text: "Registration Control",
        link: "stregistrationcontrol",
      },
    ];
    

    return(
        <>
              <Box>
        <SMTestDashboard menuItems={pages} >

        <Routes>
      <Route path="/instituteprofile" element={<InstituteProfile/>} />
      <Route path="/studentdetail" element={<StudentDetail/>} />
      <Route path="/studentlist" element={<StudentList/>} />
      <Route path="/studentlist/:id" element={<StudentList/>} />
      <Route path="/courselist" element={<CourseList/>} />
      <Route path="/assessments" element={<Assessments/>} />
      <Route path="/quizlist" element={<QuizList/>} />
      <Route path="/stregistrationcontrol" element={<STRegistrationControl/>} />
        </Routes>
        </SMTestDashboard>

        
      </Box>
        </>
    )
}