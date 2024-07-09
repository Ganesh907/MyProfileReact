import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';

import GavelRoundedIcon from '@mui/icons-material/GavelRounded';

import { TextField } from '@mui/material';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
                padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
                padding: theme.spacing(1),
        },
}));

export default function CustomizedDialogs({ id }) {

        const [open, setOpen] = React.useState(false);
        const [textValue, setTextValue] = React.useState('');
        const [error, setError] = React.useState('');

        const handleChange = (event) => {
                setTextValue(event.target.value);
                setError('');
        };
        const handleClickOpen = () => {
                setOpen(true);
        };
        const handleClose = () => {
                setOpen(false);
                setError('');
        };

        const handleApprove = (status) => {
                if (textValue.length != 0) {

                        setError('');
                        setOpen(false);
                }
                else {
                        setError("*Please Enter a Remark")
                }
                console.log(textValue)
                console.log(status)
                console.log(id)
                // setError('');
                setTextValue('')

        }



        return (
                <React.Fragment>
                        <div className='p-1 scale-90 rounded-full ps-2  border-2 border-blue-600 hover:border-black  hover:scale-100  hover:bg-blue-300 duration-1000 text-black'>
                        <GavelRoundedIcon onClick={handleClickOpen} className='cursor-pointer' />
                        </div>
                        <BootstrapDialog
                                onClose={handleClose}
                                aria-labelledby="customized-dialog-title"
                                open={open}
                        >
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                        {/* Approval Status */}
                                </DialogTitle>
                                <IconButton
                                        aria-label="close"
                                        onClick={handleClose}
                                        sx={{
                                                position: 'absolute',
                                                right: 8,
                                                top: 8,
                                                color: (theme) => theme.palette.grey[500],
                                        }}
                                >
                                        <CloseIcon />
                                </IconButton>
                                <DialogContent >

                                        <div className='flex items-center mb-2 gap-5 '>
                                                <label className='font-bold'>Approved Remarks : </label>         </div>

                                        <Typography gutterBottom>
                                                <TextField
                                                        multiline
                                                        placeholder='add remarks...'
                                                        rows={5}
                                                        minRows={5}
                                                        value={textValue}
                                                        onChange={handleChange}
                                                        variant="outlined"
                                                        sx={{ width: 400 }}
                                                        error={(error == "*Please Enter a Remark")}
                                                />


                                        </Typography>
                                        {error === "*Please Enter a Remark" ?
                                                <h1 className='text-sm text-red-500'>{error}</h1> :
                                                <h1 className='text-sm text-red-500 opacity-0'>Ganesh</h1>
                                        }

                                </DialogContent>
                                <div className=' flex justify-center mb-5 gap-10'>
                                        <Button onClick={() => handleApprove(1)} variant='contained' color='success' size='small'  >
                                                Approve
                                        </Button>
                                        <Button onClick={() => handleApprove(0)} variant='contained' color='error' size='small'  >
                                                Reject
                                        </Button>
                                </div>




                                <h6 className='opacity-[0.4]'>Remark for question number : {id}</h6>

                        </BootstrapDialog>
                </React.Fragment>
        );
}