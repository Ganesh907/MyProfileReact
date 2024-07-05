import React from 'react'
import PersonalInfoComponent from './MyProfleInfoComponents/PersonalInfoComponent'
import EditableForm from './MyProfileBankGSTComponents/EditableForm'
import MyProfile from './MyProfileEkycComponents/MyProfile'

export const MyProfileComponent = () => {
  return (
    <div className='m-5'>
<PersonalInfoComponent/>
<br/>
<EditableForm/>
<br/>
<MyProfile/>

    </div>
  )
}
