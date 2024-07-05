import React, { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";

const OTPInput = ({
  otp,
  setOtp,
//   borderColor,
//   setBorderColor,
  onEnterPressed,
  inputRefs, // Pass inputRefs as a prop
}) => {

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input field if available
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
//       setBorderColor("#0060B5");
    } else if (e.key === "Enter" && index === 5) {
      onEnterPressed();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("").slice(0, 4);
    setOtp(pasteArray);
    pasteArray.forEach((value, index) => {

      if (inputRefs.current[index]) {
        inputRefs.current[index].value = value;
        inputRefs.current[5].focus(); 
      }
    });
    
  };

  return (
    <div className="flex  mt-2 ms-2 space-x-[4px]">
      {otp.map((data, index) => {
        return (
          <input
            key={index}
            type="text"
            maxLength="1"
            style={{
              borderBottom: `1px solid `,
        //       borderRadius: "5px",

        //       outlineColor: borderColor,
            }}
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            className="w-5 h-5 text-center text-lg"
            onPaste={handlePaste}
          />
        );
      })}
    </div>
  );
};

function SixDigitInput({  }) {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [borderColor, setBorderColor] = useState("#0060B5");
 

  const inputRefs = useRef([]); // Define inputRefs here
 

  const handleSubmit = () => {
    const otpNo = parseInt(otp.join(""));
    const data = {
      OTP: otpNo,
    };

    if (isNaN(data.OTP)) {
      alert('Please enter a OTP');
    } else {
     alert(data.OTP)
    }


  };

  const handleEnterPressed = () => {
    handleSubmit();
  };

  return (
    <div className=" flex justify-end items-end ">
     
      
      <OTPInput
        otp={otp}
        setOtp={setOtp}
        borderColor={borderColor}
        setBorderColor={setBorderColor}
        onEnterPressed={handleEnterPressed}
        inputRefs={inputRefs} // Pass inputRefs to OTPInput
      />
     
        {/* <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            backgroundColor: "green",
            "&:hover": { backgroundColor: "darkgreen" },
          }}
          type="submit"
        >
          VERIFY{" "}
        </Button> */}
      
     
    </div>
  );
}

export default SixDigitInput;
