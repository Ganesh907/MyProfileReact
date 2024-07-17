import React, { useState } from 'react'
import PersonalInfoComponent from './MyProfleInfoComponents/PersonalInfoComponent'
import EditableForm from './MyProfileBankGSTComponents/EditableForm'
import MyProfileEkyc from './MyProfileEkycComponents/MyProfileEkycComponent'
import Managerinfo from './Managerinfocomponent'
import { Button } from '@mui/material'
import KycLeadsDetailsListPage from '../../MyProfile/Components/Allstatuscomponent'
import ProfileProgeessBar from './MyProfleInfoComponents/ProfileProgress'
import DynamicDemo from './MyProfleInfoComponents/ProfileProgeessBar'
// /MyProfleInfoComponents/ProfileProgeessBar'

export const MyProfileComponent = () => {
  // const [questionAnswerList, setQuestionAnswerList] = useState([]);
  const [internal,setInternal]=useState(false);


  return (
<>
<div className='flex justify-end mt-5 mr-10' >

<Button variant="contained"  onClick={() => setInternal(!internal)} sx={{borderRadius:"10px"}}>{internal ? 'External' : 'Internal'}</Button>

</div>
{
  !internal  ?

    <div className='m-5'>
     
      <PersonalInfoComponent />
    
      <br />

     
      <EditableForm />
      <br />
      <MyProfileEkyc/>
      <br />
      <Managerinfo />

      <br />
      {/* <Myprofileinfocomponent/> */}
      <div className='flex justify-center'>
        <Button variant="contained" sx={{borderRadius:"10px"}}>Update</Button>
      </div>


    </div>
    :
    <>


<div className='w-full flex flex-row gap-5 justify-center items-center p-2'>
       <ProfileProgeessBar percentagevalue={30}/>
   
      
   </div>


   <div className='w-full flex flex-row gap-5 justify-center items-center p-2'>
   <DynamicDemo percentagevalue={30}/> 
  
   </div>
    <br />
    <KycLeadsDetailsListPage/>
</>
    }

    </>
  )
}
