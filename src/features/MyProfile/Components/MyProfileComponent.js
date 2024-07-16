import React, { useState } from 'react'
import PersonalInfoComponent from './MyProfleInfoComponents/PersonalInfoComponent'
import EditableForm from './MyProfileBankGSTComponents/EditableForm'
import MyProfileEkyc from './MyProfileEkycComponents/MyProfileEkycComponent'
import Managerinfo from './Managerinfocomponent'
import { Button } from '@mui/material'
import KycLeadsDetailsListPage from '../../MyProfile/Components/Allstatuscomponent'

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
    <KycLeadsDetailsListPage/>

    }

    </>
  )
}
