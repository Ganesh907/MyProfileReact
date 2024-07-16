import React, { useState } from 'react';
import Personalinfocomponent from './Personalinfocomponent.js';
import { Paper, styled } from '@mui/material';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import BankDetailsComponent from './BankDetailsComponent.js';
import GSTDetailsComponent from './GSTDetailsComponent.js';
import Typography from '@mui/material/Typography';
import Kycinfocomponent from './Kycinfocomponent.js';
import LeadServiceComponent from './LeadServiceComponent.js';
import LeadGeoDetailsComponent from './LeadGeoDetailsComponent.js';
import Managerinfocomponent from './Managerinfocomponent2.js';


const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={4} {...props} />
))(({ theme }) => ({
        '&:not(:last-child)': { borderBottom: 0, },
        '&::before': { display: 'none', }
}));
const AccordionSummary = styled((props) => (
        <MuiAccordionSummary expandIcon={<ArrowRightRoundedIcon sx={{ fontSize: '50px', color: 'black', borderRadius: '50%', height:'50px' }} />}
                {...props}
        />
))(({ theme }) => ({
        backgroundColor:
                theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgb(243,244,246)',
        flexDirection: 'row-reverse', '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                transform: 'rotate(90deg)',
                borderRadius: '80%',
        }, '& .MuiAccordionSummary-content': {
                marginLeft: theme.spacing(1),
        },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        backgroundColor: 'rgb(243,244,246)',
}));

const Myprofileinfocomponent = () => {
        const [expanded, setExpanded] = useState(false);

        const handleChange = (panel) => (event, isExpanded) => {
                setExpanded(isExpanded ? panel : false);
        };

        const [bankInfo, setBankInfo] = useState({
                UploadDate: "03-07-2019",
                ApprovalStatus: "",
                PanNumber: "AACCN9154H",
                ServiceTaxNumber: "U74999MH2008PTC",
                VatNo: "",
                CstNo: "",
                GstNo: "27AACCN9154H1Z8",
                PanDoc: "../FranchiseeCancelCheque/10002_DSCInvoice401.pdf",
                GstDoc: "../FranchiseeCancelCheque/10002_DSCInvoice401.pdf",
                Type: "INDIVIDUAL / PROPRIETOR FIRM",
                ServiceTaxDoc: "../FranchiseeCancelCheque/10002_DSCInvoice401.pdf",
                FrachiseeServiceTaxId: "",
                FranchiseeName: "",
                AccountNumber: "99879878798798",
                BankName: "ICICI",
                BankBranch: "MIDC ANDGERI EAST",
                IfscCode: "ICICI76789HYK"
             
        });
        const [userData, setUserData] = useState({
                Name: "Rex",
                MobileNo: "9876543212",
                Email: "rexdrav@gmail.com",
                DOB: "22/07/1996",
                Gender: "Male",
                Address: "Bldg no 9, 912, Solitare Corporate Park, Andheri East",
                StateCode: "27",
                ServiceType: "",
                StateName: "Maharashtra",
                ClusterCode: "13",
                HubCode: "836",
                BlockCode: "03958",
                DistrictName: "Dhule",
                VillageCode: "526335",
                CenterPincode: "0",
                VillageName: "Amali",
                DistrictCode: "498",
                EnquiryId: 184584,
                IsAadhaarVerified: 'Verified',
                AadhaarNo: '300548972073',
        });
        const [taxInfo, setTaxInfo] = useState({
                GstNo: "27AACCN9154H1Z8",
                PanNumber: "AACCN9154H",   
                Type: "INDIVIDUAL / PROPRIETOR FIRM",
                PanDoc: "../FranchiseeCancelCheque/10002_DSCInvoice401.pdf",
                GstDoc: "../FranchiseeCancelCheque/10002_DSCInvoice401.pdf",
        });

        const [personalInfo,setpersonalInfo]=useState({
                EmployeeName: "DINESH YADAV",
                EmployeeCode: "24010002",
                EmployeeRole: "SCO (Service Center Owner)",
                MobileNo: "8433924107",
                Email: "business.analystit@ipsindia.co.in",
                ReportingOfficeAddress: "",
                Region: "",
                State: "Bihar",
                ReportingManager: "Dinesh TEST4",
                ReportingManagerRole: "SA (Support Agency)",
                ReportingManagerEmail: "dinesh.yadav@atartisan.com",
                ReportingManagerMobileNo: "9773811586",
                IsProfileUpdated: false,
                RegionalOfficeAddress: "1st Florr, Dr. R.G. Rao Villa, Cesier Road, Behind Saint Ba=laise Church , Amboli Naka , Amboli, Andheri (West) , Mumbai - 400058, Maharashtra, India.",
                District: "Arwal",
                Hub: "Mashrakh Hub",
                Village: "Injor",
                IsEmailValid: true,
                IsMobileValid: false,
                Block: "Lambhua",
                IsProfileVerified: "1",
                ImageUrl: "~/ProfilePic/35.jpg"
        })



        console.log("bankinfo", bankInfo)
        return (
                <div className='lg:px-4 p-0'>
                        <Accordion className='lg:m-6 m-0 -ml-6 lg:-ml-0' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
                                        <Typography className="text-sky-600 text-xl font-bold">Personal Info</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                        {/* <Paper className='bg-white'> */}
                                        {userData && <Personalinfocomponent userData={userData} personalInfo={personalInfo}/>}
                                </AccordionDetails>
                                        {/* </Paper> */}
                        </Accordion>

                        <Accordion className='lg:m-6 m-0 -ml-6 lg:-ml-0' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                        <Typography className="text-sky-600 text-xl font-bold">Bank Info</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                {bankInfo && <BankDetailsComponent bankInfo={bankInfo} />}
                                </AccordionDetails>
                        </Accordion>

                        <Accordion className='lg:m-6 m-0 -ml-6 lg:-ml-0' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                        <Typography className="text-sky-600 text-xl font-bold">Tax Info</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                {taxInfo && <GSTDetailsComponent taxInfo={taxInfo} />}
                                </AccordionDetails>
                        </Accordion>

                        <Accordion className='lg:m-6 m-0 -ml-6 lg:-ml-0' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                                        <Typography className="text-sky-600 text-xl font-bold">KYC Info</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                {taxInfo && <Kycinfocomponent taxInfo={taxInfo} />}
                                </AccordionDetails>
                        </Accordion>

                        <Accordion className='lg:m-6 m-0 -ml-6 lg:-ml-0' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                                        <Typography className="text-sky-600 text-xl font-bold">Other KYC Info</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                {taxInfo && <LeadServiceComponent taxInfo={taxInfo} />}
                                </AccordionDetails>
                        </Accordion>

                        <Accordion className='lg:m-6 m-0 -ml-6 lg:-ml-0' expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                                        <Typography className="text-sky-600 text-xl font-bold">Center Geographical Info</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                {taxInfo && <LeadGeoDetailsComponent taxInfo={taxInfo} personalInfo={personalInfo}/>}
                                </AccordionDetails>
                        </Accordion>

                        <Accordion className='lg:m-6 m-0 -ml-6 lg:-ml-0' expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                                        <Typography className="text-sky-600 text-xl font-bold">Manager's Info</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                {taxInfo && <Managerinfocomponent taxInfo={taxInfo} personalInfo={personalInfo}/>}
                                </AccordionDetails>
                        </Accordion>
                </div>

        );
};

export default Myprofileinfocomponent;
