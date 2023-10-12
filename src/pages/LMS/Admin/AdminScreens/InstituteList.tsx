import { Box, Button } from "@mui/material";
import {useState, useEffect} from "react"
import SMTable from "../../../../components/SMTable";
import SMButton from "../../../../components/SMButton";
import { useNavigate } from "react-router-dom";
import { fbGet } from "../../../../config/firebase/firebase-methods";
import SMTableContainer from "../../../../components/table/SMTableContainer";
import SMTableRow from "../../../../components/table/SMTableRow";
export default function InstituteList(){
    const [instituteList, setInstituteList] = useState<any[]>([]);
   

    const getInstitute = () => {
        fbGet("users/institute")
          .then((res: any) => {
              console.log(res);
            setInstituteList([...res]);
          })
          .catch((err) => {
              console.log(err);
            });
        };

useEffect(()=>{
    getInstitute();

},[])

let tableData =
[
    {
    "instituteName": "Sir Adamjee Institute",
    "logoImage": "Img",
    "NoOfCampuses": "1",
    "Status": "Active",
  },
  {
    "instituteName": "Simplilearn",
    "logoImage": "Img",
    "NoOfCampuses": "1",
    "Status": "inActive",
},
]

    const navigate = useNavigate();
    return(
        <>
           <Box className='d-flex align-items-center justify-content-center flex-column'>
        <div>
            <div className='d-flex align-items-center justify-content-between py-2'>

        <p className='m-2 fw-bold'>Institute List</p>
        <SMButton label="Add Institute" onClick={()=>{
            navigate('/institutereg')
        }}/>
            </div>
        <div className='d-flex align-items-center justify-content-around'>
          {/* <SMTable label="Testing Data"
            cols={
              [
                {
                  heading: "Name",
                  key: "instituteName",
                },
                {
                  heading: "Logo",
                  key: "logoImage",
                },
                {
                  heading: "Campuses",
                  key: "NoOfCampuses",
                },
                {
                  heading: "Status",
                  key: "Status",
                },

              ]
            }
            datasource={tableData}
          /> */}
          <SMTableContainer cols={[
          {
            heading: "Id",
            key: "id",
          },
          {
            heading: "Logo",
            key: "Logo",
          },
          {
            heading: "Institute Name",
            key: "InstituteName",
          },
          
          {
            heading: "Number Of Campus",
            key: "NumberOfCampus",
          },
          {
            heading: "Active",
            key: "Active",         
          },
        ]}>
             {instituteList && instituteList.length > 0
          ? instituteList.map((institute: any, i: number) => (  
            <SMTableRow
            key={i} 
            Id={i+1}
            Logo={institute.instituteLogo}
            Name={institute.instituteName}
            Number={institute.campuses}
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