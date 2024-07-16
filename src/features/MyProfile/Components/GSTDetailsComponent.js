import { Box, Grid } from '@mui/material'
import React from 'react'

const GSTDetailsComponent = ({ taxInfo }) => {
        console.log("taxInfo", taxInfo)
        return (
                <Box>
                <Grid container sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }} className="justify-between flex w-full" spacing={1}>
                        <Grid item>
                                <div className="lg:text-left text-left rounded-lg bg-gray-100">
                                <div className="flex flex-col lg:flex-row justify-between">
                                <div className="lg:ml-16 ml-10 justify-between ">
                                        <div className="text-base mt-4 lg:ml-0 lg:flex-none flex flex-row lg:gap-1 ">
                                                <label>Pan No.: </label>
                                                <label>{taxInfo.PanNumber}</label>
                                        </div>
                                        <div className="text-base lg:ml-0 lg:flex-none flex flex-row lg:gap-1">
                                                <label>Taxation Type: </label>
                                                <label>{taxInfo.Type}</label>
                                        </div>
                                        <div className="text-base lg:ml-0 lg:flex-none flex flex-row lg:gap-1">
                                                <label>GST Number: </label>
                                                <label>{taxInfo.GstNo}</label>
                                        </div>
                                </div>
                                <div className="mr-28 bg-black-600"></div>
                                </div>
                                </div>
                        </Grid>
                </Grid>
                </Box>
        )
}
export default GSTDetailsComponent