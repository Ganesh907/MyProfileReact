import { Box, Grid } from '@mui/material'
import React from 'react'

const Managerinfocomponent = ({ personalInfo }) => {
    console.log("personalInfo", personalInfo)
    return (
        <Box>
            <Grid container sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }} className="justify-between flex w-full" spacing={1}>
                <Grid item>
                    <>
                        <div className="lg:text-left text-left rounded-lg bg-gray-100">
                            <div className="flex flex-col lg:flex-row justify-between">
                                <div className="lg:ml-16 ml-10 justify-between ">
                                    <label className='font-bold'>Reporting Manager : </label>
                                    <label>{personalInfo.ReportingManager}</label>
                                </div>
                                <div className="text-base lg:ml-0 lg:flex-none flex flex-row lg:gap-1">
                                    <label className='font-bold'>ReportingManagerRole: </label>
                                    <label>{personalInfo.ReportingManagerRole}</label>
                                </div>
                                <div className="text-base lg:ml-0 lg:flex-none flex flex-row lg:gap-1">
                                    <label className='font-bold'>ReportingManagerEmail: </label>
                                    <label>{personalInfo.ReportingManagerEmail}</label>
                                </div>
                                <div className="text-base lg:ml-0 lg:flex-none flex flex-row lg:gap-1">
                                    <label className='font-bold'>ReportingManagerMobileNo: </label>
                                    <label>{personalInfo.ReportingManagerMobileNo}</label>
                                </div>
                            </div>

                            <div className="mr-28 bg-black-600"></div>
                        </div>
                    
                </>
           
                </Grid>
                </Grid>

        </Box>
    )
}

export default Managerinfocomponent