import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import SMDashboard from "../../Layouts/SMDashboard";
import STCommunication from "../../STCommunication";
import StudentProfile from "./StudentScreens/StudentProfile";
import EnrolledCourses from "./StudentScreens/EnrolledCourses";
import StudentResult from "./StudentScreens/StudentResult";
import NotFound from "../../NotFound";

export default function StudentDashboard() {
  const pages = [
    {
      text: "Enrolled Courses",
      link: "enrolledcourses",
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

  return (
    <>
      <Box>
        <SMDashboard menuItems={pages} dashboardName="Student Dashboard">
          <Routes>
            <Route path="/enrolledcourses" element={<EnrolledCourses />} />
            <Route path="/studentresult" element={<StudentResult />} />
            <Route path="/studentprofile" element={<StudentProfile />} />
            <Route path="/stcommunication" element={<STCommunication />} />
            {/* <Route path="*" element={<NotFound/>} /> */}
          </Routes>
        </SMDashboard>
      </Box>
    </>
  );
}
