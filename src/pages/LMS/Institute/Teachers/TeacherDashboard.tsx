import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import SMDashboard from "../../../Layouts/SMDashboard";
import AssessmentCreation from "./AssessmentCreation";
import CourseCreation from "../../../Layouts/SMForms/SMCourseReg";
import GradeBook from "./GradeBook";
import TeacherProfile from "./TeacherProfile";
import STCommunication from "../STCommunication";
import SMTestDashboard from "../../../Layouts/SMTestDashboard";

export default function TeacherDashboard(){

    const pages = [
      {
        text: "Assessment Creation",
        link: "assessmentcreation",
      },
      {
        text: "Course Creation",
        link: "coursecreation",
      },
      {
        text: "Gradebook",
        link: "gradebook",
      },
      {
        text: "Teacher Profile",
        link: "teacherprofile",
      },
      {
        text: "Communication",
        link: "stcommunication",
      },
    
    ];
    

    return(
        <>
        <Box>
        <SMTestDashboard menuItems={pages} >

        <Routes>
      <Route path="/assessmentcreation" element={<AssessmentCreation/>} />
      <Route path="/coursecreation" element={<CourseCreation/>} />
      <Route path="/gradebook" element={<GradeBook/>} />
      <Route path="/teacherprofile" element={<TeacherProfile/>} />
      <Route path="/stcommunication" element={<STCommunication/>} />
        </Routes>
        </SMTestDashboard>

        
      </Box>
        </>
    )
}