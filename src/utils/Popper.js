import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Warning from '../../src/Images/warningGif.gif';
import { Warnings } from '../data/MyProfilePageData';
export default function SimplePopper({ qid,remark }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const warningMessage = Warnings[qid];

  const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <button
        aria-describedby={id} type="button" onClick={handleClick}
      >
        <img src={Warning} className='w-5 h-5 me-3' alt='' />
      </button>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 0, p: 1, bgcolor: '#fcf8e3', color: "#ffb74f", borderRadius: 1 }}>
          {warningMessage}<br/>
          <span className='font-bold'>CC Remark : </span>{remark}
        </Box>
      </Popper>
    </div>
  );
}


{/* <div>
<button
  aria-describedby={id}
  type="button"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
   <img src={Warning} className='w-5 h-5 me-3' alt='' />
</button>
<Popper id={id} open={open} anchorEl={anchorEl}>
  <Box sx={{ border: 0, p: 1, bgcolor: '#fcf8e3',color:"#ffb74f" }}>
  {warningMessage}
  </Box>
</Popper>
</div> */}