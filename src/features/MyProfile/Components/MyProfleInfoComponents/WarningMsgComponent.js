import React, { useState, useEffect } from 'react';
import warning from '../../../../Images/warningGif.gif';
function WarningMsg() {
    const [alertMessages] = useState([
        {
            id: 1,
            warning: 'Warning - Profile Info must be 100% Complete!',
            error: 'Kindly complete ASAP'
        },
        {
            id: 2,
            warning: 'Warning - Profile Info is Incomplete!',
            error: 'Profile Info is essential and incompletion will lead to HOLD on your commissions.'
        },
        {
            id: 3,
            warning: 'Warning - Your Commission will be ON HOLD!',
            error: 'Profile completion is required, please complete in due time'
        },
        {
            id: 4,
            warning: 'Final Warning - Your commissions are listed to be ON HOLD!',
            error: 'Kindly complete your Profile Info ASAP'
        },
        {
            id: 5,
            warning: 'Immediately Complete Profile Info',
            error: 'After the completion and verification of your Profile Info the commissions will be instantly released.'
        }
    ]);

    // Assume the profile started 15 days ago for this example
    const r='2024-07-01';
    const profileStartDate = new Date(r);
    console.log(profileStartDate); // Replace with your actual start date

    // State to store the current alert based on days passed
    const [currentAlert, setCurrentAlert] = useState(alertMessages[0]);

    // State to control the visibility of the alert
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Calculate the days passed since the profile start date
        const today = new Date('2024-08-12');
        console.log(today)
        const daysPassed = Math.floor((today - profileStartDate) / (1000 * 60 * 60 * 24));

        console.log(`Days Passed: ${daysPassed}`);
        
        // Determine the current alert based on days passed
        let alertIndex = 0;
        if (daysPassed >= 1 && daysPassed <= 10) {
            alertIndex = 0; // id = 1 (index 0)
        } else if (daysPassed >= 11 && daysPassed <= 20) {
            alertIndex = 1; // id = 2 (index 1)
        } else if (daysPassed >= 21 && daysPassed <= 25) {
            alertIndex = 2; // id = 3 (index 2)
        } else if (daysPassed >= 26 && daysPassed <= 30) {
            alertIndex = 3; // id = 4 (index 3)
        } else if (daysPassed > 30) {
            alertIndex = 4; // id = 5 (index 4)
        }

        console.log(`Alert Index: ${alertIndex}`);
        
        setCurrentAlert(alertMessages[alertIndex]);

        // Set a timer to hide the alert after 5 seconds (5000 milliseconds)
        // const timer = setTimeout(() => {
        //     setIsVisible(false);
        // }, 6000); // 5 seconds
        
        
        
        // Clear the timer if the component unmounts or when alertMessages or profileStartDate change
        // return () => clearTimeout(timer);
    }, [alertMessages, profileStartDate]);

    const handleClose=()=>{
        setIsVisible(false)
    }
    // Inline styles for the alert box
    const alertBoxStyle = {
        // border: '1px solid red',
        backgroundColor: '#ffefd5',
        color: '#FFA500',
        padding: '15px',
        margin: '20px 0',
        borderRadius: '5px',
        fontFamily: 'Arial, sans-serif',
    };

    const warningStyle = {
        margin: '0 0 10px 0',
        fontSize: '18px',
        fontWeight: 'bold',
    };

    const errorStyle = {
        margin: '0',
        fontSize: '16px',
    };

    return (
        isVisible && (
            <div style={alertBoxStyle} className="fixed top-0 z-10 flex gap-10 ">
                <div>
                <div className='flex gap-2'>
                <img src={warning} className='w-7 h-6 '/>
                <h2 style={warningStyle}>{currentAlert.warning}</h2>
                </div>
                <p style={errorStyle}>{currentAlert.error}</p>
                </div>
                <div>
                    <button onClick={handleClose} className='font-bold text-lg'>X</button>
                </div>
            </div>
        )
    );
}

export default WarningMsg;