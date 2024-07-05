import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Myprofile from './PersonalInfoComponent';
import TextField from '@mui/material/TextField';
export default function AlertDialog({ Setopenpopup, title }) {
  const [open, setOpen] = React.useState(true);
  console.log(title)
  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };


  const handleClose = () => {
    Setopenpopup(false)
    setOpen(false);
  };

  console.log(open)
  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
      // onClose={handleClose}
      // aria-labelledby="alert-dialog-title"
      // aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className='text-center'>
          Enter {title}
        </DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-size-small"
            size="small"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>

          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}