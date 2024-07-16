// import { Box, Grid } from '@mui/material'
// import React from 'react'

// const BankDetailsComponent = ({ bankInfo }) => {
//   console.log("bankInfo", bankInfo)
//   return (
//     <Box>
//       <Grid container sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }} className="justify-between flex w-full" spacing={1}>
//         <Grid item>
//           <div className="lg:text-left text-left rounded-lg bg-gray-100">
//             <div className="flex flex-col lg:flex-row justify-between">

//               <div className="lg:ml-16 ml-10 justify-between ">
//                 <div>
//                   <div>
//                     <label>Bank Name: </label>
//                   </div>
//                   <div>
//                     <label>Bank Account Number: </label>
//                   </div>
//                   <div>
//                     <label>Branch Name : </label>
//                   </div>
//                   <div>
//                     <label>IFSC : </label>
//                   </div>
//                   <div>
//                     <label>Date Register: </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col ml-2 md:ml-4">
//                 <div>
//                   <span>{bankInfo.BankName}</span>
//                 </div>
//                 <div>
//                   <span>{bankInfo.AccountNumber}</span>
//                 </div>
//                 <div>
//                   <span>{bankInfo.BankBranch}</span>
//                 </div>
//                 <div>
//                   <span>{bankInfo.IfscCode}</span>
//                 </div>
//                 <div>
//                   <span>{bankInfo.UploadDate}</span>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </Grid>
//       </Grid>
//     </Box>
//   )
// }

// export default BankDetailsComponent

import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const BankDetailsComponent = ({ bankInfo }) => {
  console.log({bankInfo})
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography variant="body2">Bank Name:</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2">{bankInfo.BankName}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2">Bank Account Number:</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2">{bankInfo.AccountNumber}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2">Branch Name: </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2">{bankInfo.BankBranch}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2">IFSC: </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2">{bankInfo.IfscCode}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2">Date Registered: </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2">{bankInfo.UploadDate}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BankDetailsComponent;

