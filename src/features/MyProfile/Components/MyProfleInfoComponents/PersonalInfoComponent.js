
import React, { useState } from 'react'
import pencile from '../../../../Images/pencil.png';
import doubletick from '../../../../Images/double-check.gif';
import  ProfileProgeessBar from '../MyProfleInfoComponents/ProfileProgress';
import DynamicDemo from './ProfileProgeessBar'
import Alertmsg from '../MyProfleInfoComponents/WarningMsgComponent';
import AlertDialog from './PopUp';

const PersonalInfoComponent = () => {
  const percentagevalue=30;
  // const percentagevalue2=50;
  // const percentagevalue3=100;

  const [openpopup,Setopenpopup]=useState(false)
  const[title,settitle]=useState({
     mobile:'Mobile Number',
    email:'Email ID'
  });
  

  const handleclickmobile=()=>{
   // alert('you clicked on pencile')
    settitle(title.mobile)
   Setopenpopup(true)
  }
  
  const handleclickemail=()=>{
    // alert('you clicked on pencile')
    settitle(title.email)
    Setopenpopup(true)
   }
   
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center '>
      <Alertmsg/>
    {openpopup?(<AlertDialog Setopenpopup={Setopenpopup} title={title} />):''}
      <div className=' w-40 '>
      {/* <Carousel percentagevalue={30}/> */}
      <ProfileProgeessBar percentagevalue={percentagevalue}/>
   
      
      </div>


      <div className='w-full flex flex-row gap-5 justify-center items-center p-2'>
      <DynamicDemo percentagevalue={percentagevalue}/> 
     
      </div>
       <div className='md:w-[100%] w-full mt-2 h-full flex flex-col border border-black gap-6 pl-20 pb-10 pt-4 '>
        <div className='grid grid-cols-2 w-[55%] gap-8 '>
        <label className=' font-bold'>Name:</label>
        {/* <input type="text" className='border py-1'/> */}
        <label>Ganesh Yadhav</label>
        </div>
            
        <div className='grid grid-cols-2 w-[55%] gap-8'>
        <label  className=' font-bold'>Mobile Number:</label>
        <div className='flex gap-2'>
        {/* <input type="text" className='border'/> */}
        <label>9696754321</label>
        <button onClick={handleclickmobile}><img src={pencile} className='pr-1 h-8 pb-3'/></button>
        <img src={doubletick}  className='pr-0 h-10'/>
        </div>
        </div>

        <div className='grid grid-cols-2 w-[57%] gap-2'>
        <label  className=' font-bold'>Email:</label>
        <div className='flex gap-2 '>
        {/* <input type="text" className='border'/> */}
        <label>GY@Gmail.co...</label>
        <button  onClick={handleclickemail}><img src={pencile} className='pr-0 h-8 pb-3'/></button>
        <img src={doubletick}  className='pr-0 h-10'/>
        </div>
        </div>

        <div className='grid grid-cols-2 w-[55%] gap-8'>
        <label  className=' font-bold'>Residential Address (POA) :</label>
        {/* <input type="text" className='border py-1 '/> */}
        <label className='w-[95%] pl-0'>271, Solitaire Corporate Park, Andheri Ghatkoper Link Road, Chakala Near Satam Wadi, Mumbai, 
                Maharashtra 400093</label>
        </div>

        <div className='grid grid-cols-3 w-[83%] gap-14'>
        <label  className=' font-bold'>POA  Document :</label>
        {/* <input type="text" className='border py-1 '/> */}
        <label>Selected Type</label>
        <p className=' underline'>File name</p>
        </div>

        <div className='grid grid-cols-2 w-[55%] gap-12'>
        <label  className=' font-bold'>Paperless eKYC by Aadhaar Number :</label>
        <div className='flex gap-4'>
        {/* <input type="text" className='border'/> */}
        <label>VERIFIED</label>
        <img src={doubletick}  className='pr-0 h-10'/>
        </div>
        </div>  

        <div className='flex justify-between lg:flex-row md:flex-row flex-col w-[65%]  '>
            <div className='grid grid-cols-1 w-[50%] gap-4  '>
            <div className=''>
            <label  className=' font-bold mr-6'>HKID:</label>
            {/* <input type="text" className='border'/> */}
            <label>123456 </label>
            </div>
            <div className=''>
            <label  className=' font-bold mr-8'>Role:</label>
            {/* <input type="text" className='border'/> */}
            <label>SCO</label>
            </div>
            <div className=''>
            <label  className=' font-bold  mr-8'>Hub:</label>
            {/* <input type="text" className='border'/> */}
            <label>Mashrakh Hub</label>
            </div>
            </div>

            <div className='grid grid-cols-1 w-[40%] ml-14'>
            <div className=' '>
            <label  className=' font-bold mr-6'>Region : </label>
             {/* <input type="text" className='border'/> */}
             <label>West</label>
            </div>
            <div className=''>
            <label  className=' font-bold mr-8'>cluster: </label>
             {/* <input type="text" className='border'/> */}
             <label>XYZ</label>
            </div>
            <div className=''>
            <label  className=' font-bold mr-10'>Block :</label>
             {/* <input type="text" className='border'/> */}
             <label>Lambhua</label>
            </div>
            </div>

            <div className='grid grid-cols-1 w-[30%] '>
            <div className=''>
            <label  className=' font-bold mr-9'>State :</label>
             {/* <input type="text" className='border'/> */}
             <label>Bihar</label>
            </div>
            <div className=' '>
            <label  className=' font-bold mr-6'>District:</label>
             {/* <input type="text" className='border'/> */}
             <label>Arwal</label>
            </div>
            <div className=''>
            <label  className=' font-bold mr-3'>Location: </label>
             {/* <input type="text" className='border'/> */}
             <label>Sitapur</label>
            </div>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default PersonalInfoComponent