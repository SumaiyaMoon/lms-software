import SMCourseCard from '../../../Layouts/SMCourseCard';
import course1 from "../../../../assets/course1.png"
import Box from '@mui/material/Box';


export default function EnrolledCourses() {
  return (
   <>
   <Box className="row">
        
            <Box className="col-md-6 col-12 my-2 py-2">
   <SMCourseCard
    image={course1} 

   content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
     voluptate velit esse cillum dolore eu fugiat nulla pariatur.`} 
   duration={"3 weeks"}
   
    name={"Advanced JS"}/>
            </Box>
            <Box className="col-md-6 col-12 my-2 py-2">
   <SMCourseCard
    image={course1} 

   content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
     voluptate velit esse cillum dolore eu fugiat nulla pariatur.`} 
   duration={"3 weeks"}

    name={"Advanced JS"}/>
            </Box>
            <Box className="col-md-6 col-12 my-2 py-2">
   <SMCourseCard
    image={course1} 

   content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
     voluptate velit esse cillum dolore eu fugiat nulla pariatur.`} 
   duration={"3 weeks"}

    name={"Advanced JS"}/>
            </Box>
            <Box className="col-md-6 col-12 my-2 py-2">
   <SMCourseCard
    image={course1} 

   content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
     voluptate velit esse cillum dolore eu fugiat nulla pariatur.`} 
   duration={"3 weeks"}

    name={"Advanced JS"}/>
            </Box>
     
    </Box>
    </>
  );
}
