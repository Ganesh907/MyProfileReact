import React from 'react'
import SimplePopper from './Popper'
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';

export const UploadDocumnet = ({qid,ccRemark}) => {
       console.log(ccRemark)
       
        return (
                <div className='flex ms-5'>
                        <SimplePopper
                         qid={qid} remark={ccRemark} />
                        <FileUploadRoundedIcon color="error" />
                </div>
        )
}
