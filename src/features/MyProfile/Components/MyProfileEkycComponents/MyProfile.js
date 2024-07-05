import React, { useState } from 'react';
import {  Button, Grid,Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { data1 } from './data1';
import EditIcon from '@mui/icons-material/Edit';
import SimplePopper from './Popper';
import { UploadDocumnet } from './UploadDocumnet';
import CloseIcon from '@mui/icons-material/Close';
import SixDigitInput from './PinCode';
import RemarkStatus from './RemarkStatus';
import CustomizedDialogs from './RemarkStatus';

const MyProfile = () => {
    const [edit, setEdit] = useState(false);
    const [questionAnswerList, setQuestionAnswerList] = useState([]);
    const [errorMessage, setErrorMessage] = useState({});

    const Edit = () => {
        setEdit(!edit);
    };

    const handleInputChange = (questionId, enquiryId, value, doItLater = false) => {
        setQuestionAnswerList((prevList) => {
            const existingIndex = prevList.findIndex(item => item.QuestionId === questionId && item.EnquiryId === enquiryId);

            if (data1[questionId].is_mandatory == 1 && value.length < 1) {

                setErrorMessage(
                    { ...errorMessage, [questionId]: "This field is mandatory" }
                )
            }
            console.log(errorMessage)
            const newItem = {
                QuestionId: questionId,
                EnquiryId: enquiryId,
                Answer: value,
                DoItLater: doItLater,
                ChildQuestions: []
            };



            if (existingIndex >= 0) {
                const newList = [...prevList];
                newList[existingIndex] = newItem;
                return newList;
            } else {
                return [...prevList, newItem];
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        const saveEkycQuestionRequest = {
            QuestionId: "",
            EnquiryId: "",
            Answer: "",
            Source: "REACT",
            UserId: 0,
            RefCode: "",
            ServiceIdList: null,
            LeadIDGenerated: 0,
            questionAnswerList: questionAnswerList
        };

        console.log(saveEkycQuestionRequest)
        alert(saveEkycQuestionRequest)
    };

    const renderControl = (item) => {
        const handleChange = (e) => {
            handleInputChange(item.question_id, item.enquiry_id, e.target.value);
        };

        switch (item.question_ctrl_type) {
            case 'MultilineTextBox':
                return edit && item.isApproved === 0 ? (
                    <div className='flex '>
                        <textarea
                            id={`question_${item.question_id}`}
                            rows="2"
                            cols="42"
                            maxLength={item.question_ctrl_length}
                            required={item.is_mandatory}
                            className='border border-black rounded-md'
                            onChange={handleChange}
                        />
                        <SixDigitInput />
                    </div>
                ) : (
                    <Grid className='flex'>
                        <label>{item.answer}</label>
                        <Grid sx={{ fontSize: "15px" }}>
                            {item.newFeild}
                        </Grid>
                    </Grid>
                );
            case 'TextBox':
                return edit && item.isApproved === 0 ? (
                    <Grid container justifyContent="space-between">
                        <input
                            id={`question_${item.question_id}`}
                            maxLength={item.question_ctrl_length}
                            required={item.is_mandatory}
                            className='border border-black rounded-md'
                            onChange={handleChange}
                        />
                        {item.is_document !== 0 && <UploadDocumnet qid={item.question_id} ccRemark={item.ccRemark} />}
                    </Grid>
                ) : (
                    <Grid container justifyContent="space-between">
                        <Grid>
                            <label>{item.answer}</label>
                        </Grid>
                        <Grid className={`${item.is_document !== 0 ? 'underline text-xs' : 'text-sm'}`}>
                            {item.newFeild}
                        </Grid>
                    </Grid>
                );
            case 'DropDownList':
                const options = "Select Document Type,20,30".split(',');
                return edit && item.isApproved === 0 ? (
                    <div className='flex justify-between w-full'>
                        <select id={`question_${item.question_id}`} required={item.is_mandatory} className='border border-black rounded-md h-7' onChange={handleChange}>
                            {options.map((optionValue, index) => (
                                <option key={index} value={optionValue.trim()}>
                                    {optionValue.trim()}
                                </option>
                            ))}
                        </select>
                        {item.is_document !== 0 && <UploadDocumnet qid={item.question_id} ccRemark={item.ccRemark} />}
                    </div>
                ) : (
                    <Grid container justifyContent="space-between">
                        <label>{item.answer}</label>
                        <Grid sx={{ textDecoration: "underline", fontSize: '12px' }}>
                            {item.newFeild}
                        </Grid>
                    </Grid>
                );
            case 'RadioButtonList':
                const radioOptions = "option 1,option 2".split(',');
                return edit && item.isApproved === 0 ? (
                    <div className='flex justify-between w-full'>
                        <div id={`question_${item.question_id}`} className='flex'>
                            {radioOptions.map((optionValue, index) => (
                                <label key={index} className='me-10'>
                                    <input
                                        type="radio"
                                        name={`question_${item.question_id}`}
                                        value={optionValue.trim()}
                                        required={item.is_mandatory}
                                        onChange={handleChange}
                                    />
                                    {optionValue.trim()}
                                </label>
                            ))}
                        </div>
                        {item.is_document !== 0 && <UploadDocumnet qid={item.question_id} ccRemark={item.ccRemark} />}
                    </div>
                ) : (
                    <Grid container justifyContent="space-between">
                        <label>{item.answer}</label>
                        <Grid sx={{ textDecoration: "underline", fontSize: '12px' }}>
                            {item.newFeild}
                        </Grid>
                    </Grid>
                );
            case 'DateTextBox':
                return edit && item.isApproved === 0 ? (
                    <input
                        className='border border-black h-7 rounded-md'
                        type='date'
                        onChange={handleChange}
                    />
                ) : (
                    <label>{item.answer}</label>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className='border p-10 ps-16 border-black'>
                {edit ? <CloseIcon onClick={Edit} color="error" className='cursor-pointer' /> : <EditIcon onClick={Edit} color="primary" className='cursor-pointer' />}
                {data1.map((item) => (
                    <Grid container key={item.question_id} sx={{ my: 4 }}>
                        <Grid item xs={3}>
                            <Typography sx={{ fontWeight: 'bold' }}>
                                {item.question}:
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ display: 'flex', ml: 10 }}>
                            {edit && item.isApproved === 0 && <SimplePopper qid={item.question_id} remark={item.ccRemark} />}
                            {renderControl(item)}
                        </Grid>
                        {!edit && item.isApproved==0 &&
                        
                            <Grid className='ms-5'>
                                <CustomizedDialogs id={item.question_id} />
                            </Grid>
                        }
                    </Grid>
                ))}
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </div>

            {/* Table for questionAnswerList */}
            {edit &&
                <div className=' bottom-20 bg-transparent opacity-[0.8]  h-1/2 w-1/2 right-0 overflow-auto '>


                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead className='bg-red-200'>
                                <TableRow>
                                    <TableCell>Question ID</TableCell>
                                    <TableCell>Question</TableCell>
                                    <TableCell>Answer</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {questionAnswerList.map((qa) => (
                                    <TableRow key={qa.QuestionId}>
                                        <TableCell>{qa.QuestionId}</TableCell>
                                        <TableCell>{data1.find(item => item.question_id === qa.QuestionId)?.question}</TableCell>
                                        <TableCell>{qa.Answer}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>}

        </>
    );
};

export default MyProfile;
