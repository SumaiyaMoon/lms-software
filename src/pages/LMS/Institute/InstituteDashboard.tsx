import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import InstituteProfile from "./InstituteScreens/InstituteProfile";
import StudentDetail from "./InstituteScreens/StudentManagement/StudentDetail";
import StudentList from "./InstituteScreens/StudentManagement/StudentList";
import CourseList from "./InstituteScreens/Courses/CourseList";
import QuizList from "./InstituteScreens/Courses/QuizList";
import SMDashboard from "../../Layouts/SMDashboard";
import AssessmentList from "./InstituteScreens/Courses/AssessmentList";

export default function InstituteDashboard(){

    const pages = [
      {
        text: "Institute Profile",
        link: "instituteprofile",
      },
      {
        text: "Student List",
        link: "studentlist",
      },
      {
        text: "Course List",
        link: "courselist",
      },
      {
        text: "Quiz List",
        link: "quizlist",
      },
      {
        text: "Assessment  List",
        link: "assessmentlist",
      },

    ];
    

    return(
        <>
              <Box>
        <SMDashboard menuItems={pages} >

        <Routes>
      <Route path="/instituteprofile" element={<InstituteProfile/>} />
      <Route path="/studentdetail" element={<StudentDetail/>} />
      <Route path="/studentlist" element={<StudentList/>} />
      <Route path="/studentlist/:id" element={<StudentList/>} />
      <Route path="/courselist" element={<CourseList/>} />
      <Route path="/assessmentlist" element={<AssessmentList/>} />
      <Route path="/quizlist" element={<QuizList/>} />
        </Routes>
        </SMDashboard>

        
      </Box>
        </>
    )
}