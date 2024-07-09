import React, { useState } from 'react'
import PersonalInfoComponent from './MyProfleInfoComponents/PersonalInfoComponent'
import EditableForm from './MyProfileBankGSTComponents/EditableForm'
import MyProfileEkyc from './MyProfileEkycComponents/MyProfileEkycComponent'
import Managerinfo from './ManagerInfo'
import { Button } from '@mui/material'

export const MyProfileComponent = () => {
  // const [questionAnswerList, setQuestionAnswerList] = useState([]);
  return (

    <div className='m-5'>
      <PersonalInfoComponent />
      <br />
      <EditableForm />
      <br />
      <MyProfileEkyc/>
      <br />
      <Managerinfo />

      <br />
      <div className='flex justify-center'>
        <Button variant="contained" sx={{borderRadius:"10px"}}>Update</Button>
      </div>


    </div>
  )
}
