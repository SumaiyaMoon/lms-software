import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fbSignUp } from "../../../config/firebase/firebase-methods";
import SMInput from "../../../components/SMInput";
import SMButton from "../../../components/SMButton";
import { Box, Typography, Paper, Grid } from "@mui/material";
import SMSelect from "../../../components/SMSelect";
import SMDatePicker from "../../../components/SMDatePicker";

export default function SMStudentReg() {

  const [model, setModel] = useState<any>({});
  const fillModel = (key: string, val: string) => {
    model[key] = val;
    setModel({ ...model });
  };
  const [selectedDate, setSelectedDate] = useState('');
  const [gender, setGender] = useState("Male");
  const [role, setRole] = useState("None selected");
  const[qualification, setQualification] = useState(["Matric","Intermediate","Graduate","Masters"])
  const [lastqual, setLastQual] = useState(qualification[2]);


const handleRole = (newValue: any) => {
  setRole(newValue);
};
const handleLastQual = (newValue: any) => {
  setLastQual(newValue);
};
const handleGender = (newValue: any) => {
  setGender(newValue);
};

const handleDateChange = (date: any) => {
  setSelectedDate(date);
};
  const navigate = useNavigate();

  let signUpUser = () => {
    model.isActive = true
    console.log(model);
    fbSignUp(model,"student")
    .then((res: any) => {
      console.log(res);
      // dispatch(add({...res}))
navigate("/login")
})
      .catch((err) => {
        console.log(err);
        alert("Please Signup First")
      });
  };

  return (
 <Box
      className="bg_img_login"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <Paper className="paperColor " elevation={3} sx={{ margin: "30px", padding: "30px"}}>
        <Typography variant="h6" className="fw-bold text-center" gutterBottom>
          Student Registration
        </Typography>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <SMInput
                value={model.studentName}
                name="studentName"
                label="Student Name"
                type="text"
                onChange={(e: any) => fillModel("studentName", e.target.value)}
                className="py-2"
              />
              </Grid>
            <Grid item xs={6}>
              <SMInput
                value={model.studentFatherName}
                name="studentFatherName"
                label="Student Father Name"
                type="text"
                onChange={(e: any) => fillModel("studentFatherName", e.target.value)}
                className="py-2"
              />
              </Grid>
            <Grid item xs={6}>
              <SMInput
                value={model.studentCity}
                name="studentCity"
                label="Student City"
                type="text"
                onChange={(e: any) => fillModel("studentCity", e.target.value)}
                className="py-2"
              />
              </Grid>
            <Grid item xs={6}>
              <SMInput
                value={model.studentCountry}
                name="studentCountry"
                label="Student Country"
                type="text"
                onChange={(e: any) => fillModel("studentCountry", e.target.value)}
                className="py-2"
              />
              </Grid>
              <Grid item xs={6}>
              <SMSelect
                value={gender}
                options={["Male","Female"]}
                label="Gender"
                onChange={(gender) => {fillModel("studentGender", gender)
                handleGender(gender)
                }}
                className="py-2"
              />
              </Grid>
              <Grid item xs={6}>
                <SMDatePicker label="Date of Birth"  onChange={(DOB) => {fillModel("studentDOB", DOB)
                handleDateChange(DOB)
                }}/>
              </Grid>
            <Grid item xs={6}>
              <SMInput
                value={model.studentContact}
                name="studentContact"
                label="Contact"
                type="number"
                onChange={(e: any) => fillModel("studentContact", e.target.value)}
                className="py-2"
              />
              </Grid>
              
            
              <Grid item xs={6}>
              <SMInput
                value={model.email}
                name="email"
                label="Student Email"
                type="email"
                onChange={(e: any) => fillModel("email", e.target.value)}
                className="py-2"
              />
            </Grid>

            <Grid item xs={6}>
              <SMInput
                value={model.password}
                name="password"
                label="Password"
                type="password"
                onChange={(e: any) => fillModel("password", e.target.value)}
                className="py-2"
              />
            </Grid>
            <Grid item xs={6}>
              <SMInput
                value={model.cnic}
                name="cnic"
                label="CNIC"
                type="number"
                onChange={(e: any) => fillModel("cnic", e.target.value)}
                className="py-2"
              />
              </Grid>
              <Grid item xs={6}>
              <SMSelect
                value={role}
                options={["Student","None selected"]}
                label="Account Type"
                onChange={(role) => {fillModel("role", role)
                handleRole(role)
                }}
                className="py-2"
              />
              </Grid>
              <Grid item xs={6}>
              <SMSelect
                value={lastqual}
                options={qualification}
                label="Last Qualification"
                onChange={(lastqual) => {fillModel("lastQual", lastqual)
                handleLastQual(lastqual)
                }}
                className="py-2"
              />
              </Grid>
           
            <Grid
              item
              xs={6}
              className="d-flex justigy-content-between align-items-center gap-5"
            >
              <SMButton
                type="button"
                label="SignUp"
                onClick={signUpUser}
                className="py-2"
              />
              <Typography className="py-2">
                Already Registered? <Link to="/Login" >Login</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}