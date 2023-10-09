import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fbSignUp } from "../../config/firebase/firebase-methods";
import SMInput from "../../components/SMInput";
import SMButton from "../../components/SMButton";
import { Box, Typography, Paper, Grid } from "@mui/material";

export default function SMSignUp() {
  const [model, setModel] = useState<any>({});
  const fillModel = (key: string, val: string) => {
    model[key] = val;
    setModel({ ...model });
  };

  const navigate = useNavigate();

  let signUpUser = () => {
    console.log(model);
    fbSignUp(model)
      .then((res) => {
        navigate("/chatbox");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
 <Box
      className="bg_img_login"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper className="paperColor" elevation={3} sx={{ p: 3, maxWidth: 400 }}>
        <Typography variant="h6" className="fw-bold" gutterBottom>
          SignUp
        </Typography>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <SMInput
                value={model.username}
                name="username"
                label="User Name"
                type="text"
                onChange={(e: any) => fillModel("username", e.target.value)}
                className="py-2"
              />
              <SMInput
                value={model.email}
                name="email"
                label="Email"
                type="email"
                onChange={(e: any) => fillModel("email", e.target.value)}
                className="py-2"
              />
            </Grid>

            <Grid item xs={12}>
              <SMInput
                value={model.password}
                name="password"
                label="Password"
                type="password"
                onChange={(e: any) => fillModel("password", e.target.value)}
                className="py-2"
              />
            </Grid>
            <Grid item xs={12}>
              <SMInput
                name="password"
                label="Confirm Password"
                type="password"
                className="py-2"
              />
            </Grid>
            <Grid
              item
              xs={12}
              className="d-flex justigy-content-between align-items-center gap-5"
            >
              <SMButton
                type="button"
                label="SignUp"
                onClick={signUpUser}
                className="py-2"
              />
              <Typography className="py-2">
                Already Signed Up? <Link to="/Login" >Login</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
