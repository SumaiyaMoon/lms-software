import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import SMButton from "../../../../../components/SMButton";
import { useNavigate } from "react-router-dom";
import SMTableContainer from "../../../../../components/table/SMTableContainer";
import SMTableRow from "../../../../../components/table/SMTableRow";
import { fbGet } from "../../../../../config/firebase/firebase-methods";

export default function InstituteList() {
  const [studentList, setStudentList] = useState<any[]>([]);

  const getStudent = () => {
    fbGet("users/student") // Assuming "student" is the correct path to your student data in Firebase
      .then((res: any) => {
        console.log(res);
        setStudentList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStudent();
  }, []);

  const navigate = useNavigate();

  return (
    <Box className="d-flex align-items-center justify-content-center flex-column">
      <div>
        <div className="d-flex align-items-center justify-content-between py-2">
          <p className="m-2 fw-bold">Institute List</p>
          <SMButton
            label="Add Student"
            onClick={() => {
              navigate("/studentreg");
            }}
          />
        </div>
        <div className="d-flex align-items-center justify-content-around">
          <SMTableContainer
            cols={[
              {
                heading: "Id",
                key: "id", // This should match the key in your student data
              },
              {
                heading: "Name",
                key: "studentName", // This should match the key in your student data
              },
              {
                heading: "Email",
                key: "email", // This should match the key in your student data
              },
              {
                heading: "Active",
                key: "isActive", // This should match the key in your student data
              },
            ]}
          >
           {studentList && studentList.length > 0
  ? studentList.map((student: any, i: number) => (
      <SMTableRow
        key={i}
        Id={i + 1}
        Name={student.studentName || "N/A"} // Handle empty studentName
        Email={student.email || "N/A"} // Handle empty email
        Active={student.isActive ? "Yes" : "No"}
      />
    ))
  : null}
          </SMTableContainer>
          
        </div>
      </div>
    </Box>
  );
}
