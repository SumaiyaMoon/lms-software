import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import SMButton from "../../../../../components/SMButton";
import { useNavigate } from "react-router-dom";
import { fbGet } from "../../../../../config/firebase/firebase-methods";
import SMTableContainer from "../../../../../components/table/SMTableContainer";
import SMTableRow from "../../../../../components/table/SMTableRow";

export default function QuizList() {
  const [courseList, setCourseList] = useState<any[]>([]);

  const getCourse = () => {
    fbGet("courses")
      .then((res: any) => {
        console.log(res);
        setCourseList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCourse();
  }, []);

  const navigate = useNavigate();

  return (
    <Box className="d-flex align-items-center justify-content-center flex-column">
      <div>
        <div className="d-flex align-items-center justify-content-between py-2">
          <p className="m-2 fw-bold">Quiz List</p>
          <SMButton label="Add Quiz" onClick={() => navigate("/quizreg")} />
        </div>
        <div className="d-flex align-items-center justify-content-around">
          <SMTableContainer
            cols={[
              {
                heading: "Id",
                key: "id", // Update this key based on your course data
              },
              {
                heading: "Course",
                key: "courseName", // Update this key based on your course data
              },
              {
                heading: "Duration (weeks)",
                key: "courseDuration", // This should match the key in your student data
              },
              {
                heading: "Teacher",
                key: "courseTeacher", // Update this key based on your course data
              },
            ]}
          >
            {courseList && courseList.length > 0
              ? courseList.map((course: any, i: number) => (
                  <SMTableRow
                    key={i}
                    Id={i + 1}
                    Name={course.courseName || "N/A"}
                    Email={course.courseDuration}
                    Active={course.courseTeacher || "N/A"}
                  />
                ))
              : null}
          </SMTableContainer>
        </div>
      </div>
    </Box>
  );
}
