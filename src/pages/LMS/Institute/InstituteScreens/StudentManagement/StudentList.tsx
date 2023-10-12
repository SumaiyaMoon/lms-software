import { Box, Button } from "@mui/material";
import {useState, useEffect} from "react"
import SMButton from "../../../../../components/SMButton";
import { useNavigate } from "react-router-dom";
import SMTableContainer from "../../../../../components/table/SMTableContainer";
import SMTableRow from "../../../../../components/table/SMTableRow";
import { fbGet } from "../../../../../config/firebase/firebase-methods";
export default function InstituteList(){
    const [studentList, setStudentList] = useState<any[]>([]);
   

    const getStudent = () => {
        fbGet("users/student")
          .then((res: any) => {
              console.log(res);
            setStudentList([...res]);
          })
          .catch((err) => {
              console.log(err);
            });
        };

useEffect(()=>{
    getStudent();

},[])

    const navigate = useNavigate();
    return(
        <>
           <Box className='d-flex align-items-center justify-content-center flex-column'>
        <div>
            <div className='d-flex align-items-center justify-content-between py-2'>

        <p className='m-2 fw-bold'>Institute List</p>
        <SMButton label="Add Student" onClick={()=>{
            navigate('/studentreg')
        }}/>
            </div>
        <div className='d-flex align-items-center justify-content-around'>
          
          <SMTableContainer cols={[
          {
            heading: "Id",
            key: "id",
          },
          
          {
            heading: "Institute Name",
            key: "InstituteName",
          },
          
         
          {
            heading: "Email",
            key: "Email",         
          },
          {
            heading: "Active",
            key: "Active",         
          },
        ]}>
             {studentList && studentList.length > 0
          ? studentList.map((student: any, i: number) => (  
            <SMTableRow
            key={i} 
            Id={i+1}
            Name={student.name}
            Email={student.email}
            Active="yes"
            />  
        )):null}

          </SMTableContainer>
          <div>
         
          </div>
        </div>
      </div>
        </Box>
        </>
    )
}