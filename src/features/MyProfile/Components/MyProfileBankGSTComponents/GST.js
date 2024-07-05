


import { useState, useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import warning from "../../../../Images/warningGif.gif";
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import { Select } from "@mui/material";


const taxationOptions = [
  { value: 'GST', label: 'GST' },
  { value: 'VAT', label: 'VAT' },
  { value: 'CST', label: 'CST' },
  
];

function GST({ onClose }) {
  const [panNo, setPanNo] = useState("");
  const [ValidPan, setValidPan] = useState(true);
  const [ValidGst, setValidGst] = useState(true);
  const [taxationType, setTaxationType] = useState(null);
  const [gstNumber, setGstNumber] = useState("");
  const [panError, setPanError] = useState("");
  const [gstError, setGstError] = useState("");
  
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  

  useEffect(() => {
    if (panNo && taxationType && gstNumber && !panError) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [panNo, taxationType, gstNumber, panError]);

  
  console.log({ panNo });

  

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValidPan(validatePanNo(value));
  };


  const validatePanNo = (value) => {
    debugger;
    const panRegex = /^[A-Z]{3}[P\d][A-Z]\d{4}[A-Z]$/;

    let upperCaseValue = value.toUpperCase();
    const firstPart = upperCaseValue.slice(0, 3).replace(/[^A-Z]/g, "");
    let fourthCharacter = "";
    if (upperCaseValue.length > 3) {
      fourthCharacter = upperCaseValue
        .charAt(3)
        .toUpperCase()
        .replace(/[^P]/g, "");
    }
    const fifthCharacter = upperCaseValue.slice(4, 5).replace(/[^A-Z]/g, "");
    const sixthToNinthCharacters = upperCaseValue
      .slice(5, 9)
      .replace(/[^0-9]/g, "");
    const tenthCharacter = upperCaseValue.slice(9).replace(/[^A-Z]/g, "");

    const filteredValue = (
      firstPart +
      fourthCharacter +
      fifthCharacter +
      sixthToNinthCharacters +
      tenthCharacter
    ).slice(0, 10);
    setPanNo(filteredValue);


    return panRegex.test(filteredValue);
  };

  const validateGstNumber = (value) => {
    const gstRegex = /^[0-9]{2}[A-Z]{3}[P\d][A-Z]\d{4}[A-Z][0-9A-Z]Z[0-9A-Z]$/;
  
    let upperCaseValue = value.toUpperCase();
    const firstPart = upperCaseValue.slice(0, 2).replace(/[^0-9]/g, "");
    const panPart = upperCaseValue.slice(2, 12).replace(/[^A-Z0-9]/g, "");
    const thirteenthCharacter = upperCaseValue.slice(12, 13).replace(/[^0-9A-Z]/g, "");
    const fourteenthCharacter = upperCaseValue.slice(13, 14).replace(/[^Z]/g, "");
    const fifteenthCharacter = upperCaseValue.slice(14, 15).replace(/[^0-9A-Z]/g, "");
  
    const filteredValue = (firstPart + panPart + thirteenthCharacter + fourteenthCharacter + fifteenthCharacter).slice(0, 15);
    setGstNumber(filteredValue);
  
    return gstRegex.test(filteredValue);
  };

  const handleGstChange = (e) => {
    const { value } = e.target;
    setValidGst(validateGstNumber(value));
  

  };

  const handleTaxationTypeChange = (selectedOption) => {
    setTaxationType(selectedOption);
    

  };
  



  const handleSave = () => {
    
  };

  return (
    <>
      {/* <img
        src={close}
        className="h-4 w-4 mt-0 cursor-pointer"
        onClick={onClose}
      /> */}
      <CloseIcon  onClick={onClose}/>
      <div className="flex justify-between w-full sm:w-[64%] relative gap-1 ">
        <label className="w-1/3">PAN NO:</label>
        <img src={warning} className="absolute -top-4 h-6 w-6 ml-40" />
        <input
          type="text"
          className="w-[70%] ml-2 mr-10 border border-black p-2 rounded-md"
          value={panNo}
          onChange={(e) => handleInputChange(e, "panNo")}
        />
        {panError && <p className="text-red-500">{panError}</p>}
        <div className="">
          <button
            onClick={handleSave}
            className={`border border-blue-400 rounded-2xl w-28 h-10 bg-gray-300 text-blue-600 ${
              isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isButtonDisabled}
          >
            instant Verify
          </button>
          <img src={warning} className="absolute -top-4 h-6 w-6 ml-40" />
          <FileUploadRoundedIcon color='error'/>
        </div>
      </div>

      <div className="flex justify-between w-full sm:w-[50%] relative">
        <label className="w-1/3">Taxation Type:</label>
        <img src={warning} className="absolute -top-4 h-6 w-6 ml-40" />
       
        <Select
          className="w-2/3 border border-black rounded-md"
          value={taxationType}
          onChange={handleTaxationTypeChange}
          options={taxationOptions}
        />

      </div>

      <div className="flex justify-between w-full sm:w-[64%] relative gap-1 ">
        <label className="w-1/3">GST Number & Document:</label>
        <img src={warning} className="absolute -top-4 h-6 w-6 ml-40" />
        <input
          type="text"
          className="w-[70%] ml-2 mr-10 border border-black p-2 rounded-md"
          value={gstNumber}
          onChange={(e) => handleGstChange(e, "gstNumber")}
        />
        {gstError && <p className="text-red-500">{gstError}</p>}
        <div className="">
          <button
            onClick={handleSave}
            className={`border border-blue-400 rounded-2xl w-28 h-10 bg-gray-300 text-blue-600 ${
              isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isButtonDisabled}
          >
            instant Verify
          </button>
          <img src={warning} className="absolute -top-4 h-6 w-6 ml-40" />
          <FileUploadRoundedIcon color='error'/>
        </div>
      </div>
    </>
  );
}

export default GST;