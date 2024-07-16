import React from 'react';
import { Box, Grid } from '@mui/material';

const Personalinfocomponent = ({ userData, personalInfo }) => {
    console.log("userData", userData);
    console.log("personalInfo", personalInfo);
    return (
        <Box>
            <Grid container sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }} className="flex w-full" spacing={1}>
                <Grid item xs={12}>
                    <div className="lg:text-left text-left rounded-lg bg-gray-100 p-4">
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={4}>
                                <div className="lg:flex flex-col md:flex-auto sm:flex-auto">
                                    <div className="flex">
                                        <label className='font-bold'>Name: </label>
                                    </div>
                                    <div className="flex">
                                        <label className='font-bold'>Mobile Number: </label>
                                    </div>
                                    <div className="flex">
                                        <label className='font-bold'>Email: </label>
                                    </div>
                                    <div className="flex">
                                        <label className='font-bold'>Gender: </label>
                                    </div>
                                    <div className="flex">
                                        <label className='font-bold'>D.O.B: </label>
                                    </div>
                                    <div className="flex">
                                        <label className='font-bold'>Paperless eKYC by Aadhaar Number: </label>
                                    </div>
                                    <div className="flex">
                                        <label className='font-bold'>Residential Address (POA): </label>
                                    </div>
                                    <div className="flex">
                                        <label className='font-bold'>POA Document: </label>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <div className="flex flex-col ml-2 md:ml-4">
                                    <div>
                                        <span>{userData.Name}</span>
                                    </div>
                                    <div>
                                        <span>{userData.MobileNo}</span>
                                    </div>
                                    <div>
                                        <span>{userData.Email}</span>
                                    </div>
                                    <div>
                                        <span>{userData.Gender}</span>
                                    </div>
                                    <div>
                                        <span>{userData.DOB}</span>
                                    </div>
                                    <div>
                                        <span>{userData.IsAadhaarVerified ? 'Verified' : 'Not Verified'}</span>
                                    </div>
                                    <div>
                                        <span>{userData.Address}</span>
                                    </div>
                                    <div>
                                        <span>{userData.POADocument}</span>
                                    </div>
                                </div>
                                
                            </Grid>
                        </Grid>
                    </div>
                </Grid>

            </Grid>
   
        </Box>

    );
};

export default Personalinfocomponent;
