import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import warning from "../../../../Images/warningGif.gif";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import TextField from "@mui/material/TextField";
import Select from "react-select";

const taxationOptions = [
  { value: "GST", label: "GST" },
  { value: "VAT", label: "VAT" },
  { value: "CST", label: "CST" },
  { value: "Indivisual", label: "indivisual" },
];

function GST({ onClose }) {
  const [panNo, setPanNo] = useState("");
  const [ValidPan, setValidPan] = useState(true);
  const [ValidGst, setValidGst] = useState(true);
  const [taxationType, setTaxationType] = useState(null);
  const [gstNumber, setGstNumber] = useState("");
  const [panError, setPanError] = useState("");
  const [gstError, setGstError] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (panNo && taxationType && gstNumber && !panError) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [panNo, taxationType, gstNumber, panError]);

  console.log({ panNo });

  const handleInputChange = (event) => {
    debugger;
    const { value } = event.target;
    const upperCaseValue = value.toUpperCase();
    const filteredValue = upperCaseValue.replace(/[^A-Z0-9]/g, "");

    setPanNo(filteredValue);
    validatePanNo(filteredValue);
    setInputDisabled(false);
  };
  const validatePanNo = (value) => {
    debugger;
    const panRegex = /^[A-Z]{3}[P]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}$/;
    const firstreg = /^[A-Z]{0,3}$/;
    const fourthCharacter = /^.{3}P.*/;
    const fifthCharacter = /^[A-Z]{5}$/;
    const sixthToNinthCharacters = /^[0-9A-Z]{6,9}$/;
    const tenthCharacter = /^.{9}[a-zA-Z].*$/;
    let upperCaseValue = value.toUpperCase();

    const firstPart = upperCaseValue.slice(0, 3);
    if (!firstreg.test(firstPart)) {
      setPanError("Invalid PAN Number First three charter must be alphabet.");
    } else if (
      upperCaseValue.length > 3 &&
      !fourthCharacter.test(upperCaseValue)
    ) {
      setPanError("Invalid PAN Number Fourth character should be P.");
    } else if (
      upperCaseValue.length > 4 &&
      upperCaseValue.length <= 5 &&
      !fifthCharacter.test(upperCaseValue)
    ) {
      setPanError("Invalid PAN Number Fifth character should be a character.");
    } else if (
      upperCaseValue.length > 5 &&
      upperCaseValue.length <= 9 &&
      !sixthToNinthCharacters.test(upperCaseValue)
    ) {
      setPanError(
        "Invalid PAN Number characters from position 6 to 9 must be digits or alphabetic characters."
      );
    } else if (
      upperCaseValue.length > 9 &&
      upperCaseValue.length <= 10 &&
      !tenthCharacter.test(upperCaseValue)
    ) {
      setPanError("Invalid PAN Number Tenth Character should be a charcter.");
    } else {
      setPanError("");
    }

    setPanNo(upperCaseValue);
    return;
  };

  const handleGstChange = (e) => {
    debugger;
    const { value } = e.target;
    const upperCaseValue = value.toUpperCase();
    const filteredValue = upperCaseValue.replace(/[^A-Z0-9]/g, "");
    setGstNumber(filteredValue);
    if (gstNumber == "NA") {
      setInputDisabled(true);
    }
    validateGstNumber(filteredValue);
  };

  const validateGstNumber = (value) => {
    debugger;
    const gstRegex =
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}$/;

    let upperCaseValue = value.toUpperCase();

    const firstreg = /^[0-9]{0,2}$/;

    const panRegex = /^.{2}[A-Z]{1,5}$/;

    const thirdRegex = /^.{7}[0-9]{1,4}$/;
    const fourRegex = /^.{11}[A-Z]{0,1}$/;
    const fifthRegex = /^.{12}[1-9A-Z]{0,1}$/;
    const sixthRegex = /^.{13}[Z]{0,1}$/;
    const seventhRegex = /^.{14}[0-9A-Z]{0,1}$/;

    const firstPart = upperCaseValue.slice(0, 2);
    if (!firstreg.test(firstPart)) {
      setGstError("Invalid GSt Number First two charter must be number.");
    } else if (
      upperCaseValue.length > 2 &&
      upperCaseValue.length <= 7 &&
      !panRegex.test(upperCaseValue)
    ) {
      setGstError("only character.");
    } else if (
      upperCaseValue.length > 7 &&
      upperCaseValue.length <= 11 &&
      !thirdRegex.test(upperCaseValue)
    ) {
      setGstError("only numbers.");
    } else if (
      upperCaseValue.length > 11 &&
      upperCaseValue.length <= 12 &&
      !fourRegex.test(upperCaseValue)
    ) {
      setGstError("Invalid should be alphabet.");
    } else if (
      upperCaseValue.length > 12 &&
      upperCaseValue.length <= 13 &&
      !fifthRegex.test(upperCaseValue)
    ) {
      setGstError("good.");
    } else if (
      upperCaseValue.length > 13 &&
      upperCaseValue.length <= 14 &&
      !sixthRegex.test(upperCaseValue)
    ) {
      setGstError("Invalid should be z.");
    } else if (
      upperCaseValue.length > 14 &&
      upperCaseValue.length <= 15 &&
      !seventhRegex.test(upperCaseValue)
    ) {
      setGstError("good.");
    } else {
      setGstError("");
    }

    setGstNumber(upperCaseValue);
    return;
  };

  // const handleTaxationTypeChange = (selectedOption) => {
  //   setTaxationType(selectedOption);
  // };

  const handleTaxationTypeChange = (selectedOption) => {
    setTaxationType(selectedOption);
    if (selectedOption.value === "Indivisual") {
      setGstNumber("NA");
      setInputDisabled(true);
    } else {
      setGstNumber("");
      setInputDisabled(false);
    }
  };

  const handleSave = () => {};

  return (
    <>
    
      <CloseIcon onClick={onClose} />
      <div className="flex justify-between w-full sm:w-[64%] gap-4 ">
        <label className="w-1/3 ">PAN NO:</label>
        <img src={warning} className="h-6 w-6 mr-3" />

        <TextField
          id="standard-basic"
          variant="standard"
          className="w-[60%]"
          onChange={(e) => handleInputChange(e, "panNo")}
          inputProps={{ maxLength: 10 }}
          type="text"
          value={panNo}
        />

        {panError && <p className="text-red-500">{panError}</p>}
        <div className=" w-[30%] flex gap-2">
          <button
            onClick={handleSave}
            className={`border border-blue-400 rounded-2xl w-28 h-10 bg-gray-300 text-blue-600 ${
              isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isButtonDisabled}
          >
            instant Verify
          </button>
          <img src={warning} className=" -top-2 h-6 w-6 " />
          <FileUploadRoundedIcon color="error" />
        </div>
      </div>

      <div className="flex justify-between w-full sm:w-[64%] gap-4 ">
        <label className="w-1/3">Taxation Type:</label>
        <img src={warning} className="h-6 w-6 mr-3" />

        <Select
          className="w-[62%] mr-48 border border-black rounded-md size-10"
          value={taxationType}
          onChange={handleTaxationTypeChange}
          options={taxationOptions}
        />
      </div>

      <div className="flex justify-between w-full sm:w-[64%] gap-4">
        <label className="w-1/3">GST Number & Document:</label>
        <img src={warning} className=" h-6 w-6 mr-3" />
        <input
          type="text"
          className="w-[62%] mr-2  border border-black p-2 rounded-md size-10"
          value={gstNumber}
          disabled={inputDisabled}
          maxLength="15"
          onChange={(e) => handleGstChange(e, "gstNumber")}
        />
        {gstError && <p className="text-red-500">{gstError}</p>}
        <div className=" w-[30%] flex gap-2">
          <button
            onClick={handleSave}
            className={`border border-blue-400 rounded-2xl  w-28 h-10 bg-gray-300 text-blue-600 ${
              isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isButtonDisabled}
          >
            instant Verify
          </button>
          <img src={warning} className="  h-6 w-6  " />
          <FileUploadRoundedIcon color="error" />
        </div>
      </div>
    </>
  );
}

export default GST;
