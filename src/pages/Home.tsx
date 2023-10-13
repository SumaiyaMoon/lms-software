import { Typography } from "@mui/material";
import SMButton from "../components/SMButton";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();

 return(
    <>
    <div className="bg_img_home d-flex align-items-center justify-content-center">
<div className="container row d-flex align-items-center justify-content-center">
   
    <div className="col-6 text-center text-white">
        <Typography className="py-2" variant="h2">LMS</Typography>
        <Typography className="py-2" variant="h4">Learning Management System</Typography>
        <div className="d-flex align-items-center justify-content-center gap-2 m-2 ">
            <SMButton onClick={()=>{navigate('/login')}} label="Login to Dashboard" className="text-white rounded"/>
            <SMButton onClick={()=>{navigate('/signup')}} label="New here? Sign Up" className="text-white rounded"/>
        </div>
    </div>
</div>
    </div>
    </>
)
}
