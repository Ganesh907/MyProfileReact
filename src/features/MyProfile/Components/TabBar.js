import React from 'react'
import { AppBar, Box, Button, Tab, Tabs, TextField, Typography } from '@mui/material';
function Tabbar() {
    const tab1 = {
        // backgroundColor: "red",
        border: '1.5px solid blue',
        borderRadius: '15px 15px 0px 0px',
       // padding: '0px'
      // Height:'20px'
    };
    const handleallstatus=()=>{
        alert('All Status tab click')
    }
    const handlepanding=()=>{
        alert('pending tab click')
    }
  return (
    <div className=' flex justify-end m-2'>
        {/* <AppBar position="static" style={{ background: 'white', color: 'black' }}> */}
        {/* <Tabs */}
          {/* //value={value}
         // onChange={handleChange}
          //indicatorColor="secondary"
          //textColor="inherit"
        //   variant="fullWidth"
          //aria-label="full width tabs example" */}
          {/* > */}
          {/* <Tab onClick={() => tabClick(0)} label="Completed List" {...a11yProps(0)} style={{ color: value === 0 ? "#42E0FF" : "grey" }} />
          <Tab onClick={() => tabClick(1)} label="Pending List" {...a11yProps(1)} style={{ color: value === 1 ? "#42E0FF" : "grey" }} /> */}
 <Tab label="All Status" onClick={handleallstatus} style={tab1} className='w-44 h-10'/>
 <Tab  label="Pending Status" onClick={handlepanding} style={tab1}/>
         
        {/* </Tabs> */}
      {/* </AppBar> */}
    </div>
  )
}


export default Tabbar