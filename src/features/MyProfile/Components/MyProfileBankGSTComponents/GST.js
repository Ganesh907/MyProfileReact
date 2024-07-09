import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import warning from "../../../../Images/warningGif.gif";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
// import { Select } from "@mui/material";
import Select from "react-select";

const taxationOptions = [
  { value: "GST", label: "GST" },
  { value: "VAT", label: "VAT" },
  { value: "CST", label: "CST" },
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

  // const handleInputChange = (e) => {
  //   const { value } = e.target;
  //   setValidPan(validatePanNo(value));
  // };

  // const validatePanNo = (value) => {
  //   debugger;
  //   const panRegex = /^[A-Z]{3}[P\d][A-Z]\d{4}[A-Z]$/;

  //   let upperCaseValue = value.toUpperCase();
  //   const firstPart = upperCaseValue.slice(0, 3).replace(/[^A-Z]/g, "");
  //   let fourthCharacter = "";
  //   if (upperCaseValue.length > 3) {
  //     fourthCharacter = upperCaseValue
  //       .charAt(3)
  //       .toUpperCase()
  //       .replace(/[^P]/g, "");
  //   }
  //   const fifthCharacter = upperCaseValue.slice(4, 5).replace(/[^A-Z]/g, "");
  //   const sixthToNinthCharacters = upperCaseValue
  //     .slice(5, 9)
  //     .replace(/[^0-9]/g, "");
  //   const tenthCharacter = upperCaseValue.slice(9).replace(/[^A-Z]/g, "");

  //   const filteredValue = (
  //     firstPart +
  //     fourthCharacter +
  //     fifthCharacter +
  //     sixthToNinthCharacters +
  //     tenthCharacter
  //   ).slice(0, 10);
  //   setPanNo(filteredValue);

  //   return panRegex.test(filteredValue);
  // };

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
    const panRegex = /^[A-Z]{3}[P]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}$/; ///^[A-Z]{3}[P\d][A-Z]\d{4}[A-Z]$/;
    const firstreg = /^[A-Z]{0,3}$/; // Regex to match exactly three uppercase letters
    const fourthCharacter = /^.{3}P.*/; ///[^P]/; ///^[A-Z]{4}P?$/;
    const fifthCharacter = /^[A-Z]{5}$/;
    const sixthToNinthCharacters = /^[0-9A-Z]{6,9}$/;
    const tenthCharacter = /^.{9}[a-zA-Z].*$/;
    let upperCaseValue = value.toUpperCase(); // Convert value to uppercase

    // const isValidPan = panRegex.test(upperCaseValue);

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
      // No errors
      setPanError(""); // Assuming this means no error
    }

    setPanNo(upperCaseValue);
    return;
  };

  const validateGstNumber = (value) => {
    const gstRegex = /^[0-9]{2}[A-Z]{3}[P\d][A-Z]\d{4}[A-Z][0-9A-Z]Z[0-9A-Z]$/;

    let upperCaseValue = value.toUpperCase();
    const firstPart = upperCaseValue.slice(0, 2).replace(/[^0-9]/g, "");
    const panPart = upperCaseValue.slice(2, 12).replace(/[^A-Z0-9]/g, "");
    const thirteenthCharacter = upperCaseValue
      .slice(12, 13)
      .replace(/[^0-9A-Z]/g, "");
    const fourteenthCharacter = upperCaseValue
      .slice(13, 14)
      .replace(/[^Z]/g, "");
    const fifteenthCharacter = upperCaseValue
      .slice(14, 15)
      .replace(/[^0-9A-Z]/g, "");

    const filteredValue = (
      firstPart +
      panPart +
      thirteenthCharacter +
      fourteenthCharacter +
      fifteenthCharacter
    ).slice(0, 15);
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

  const handleSave = () => {};

  return (
    <>

      <CloseIcon onClick={onClose} />
      <div className="flex justify-between w-full sm:w-[64%] gap-4 ">
        <label className="w-1/3">PAN NO:</label>
        <img src={warning} className="h-6 w-6 mr-3" />
        <input
          type="text"
          maxLength="10"
          className="w-[60%]  mr-2 border border-black p-2 rounded-md size-10"
          value={panNo}
          onChange={(e) => handleInputChange(e, "panNo")}
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
