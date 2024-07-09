


import { useState, useEffect } from "react";
import warning from "../../../../Images/warningGif.gif";
import React from "react";
import { Select } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function BankInfo({ onClose }) {
  const [currentDate, setCurrentDate] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [branchName, setBranchName] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const [validIfsc, setValidIfsc] = useState(true);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});

  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    bankAccountNumber: "",
    branchName: "",
    ifsc: "",
    currentDate: "",
  });

  console.log({ bankDetails });

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    setCurrentDate(formattedDate);
    setBankDetails((prevDetails) => ({
      ...prevDetails,
      currentDate: formattedDate,
    }));
  }, []);

  const bankOptions = [
    {
      value: "ap_mahesh_cooperative_urban_bank_limited",
      label: "AP MAHESH COOPERATIVE URBAN BANK LIMITED",
    },
    {
      value: "abhyudaya_cooperative_bank_limited",
      label: "ABHYUDAYA COOPERATIVE BANK LIMITED",
    },
    {
      value: "abhyudaya_mahila_urban_cooperative_bank_limited",
      label: "ABHYUDAYA MAHILA URBAN COOPERATIVE BANK LIMITED",
    },
    { value: "abu_dhabi_commercial_bank", label: "ABU DHABI COMMERCIAL BANK" },
    {
      value: "ace_cooperative_bank_limited",
      label: "ACE COOPERATIVE BANK LIMITED",
    },
    {
      value: "adarsh_cooperative_bank_limited",
      label: "ADARSH COOPERATIVE BANK LIMITED",
    },
    {
      value: "ahilyadevi_urban_cooperative_bank_limited",
      label: "AHILYADEVI URBAN COOPERATIVE BANK LIMITED",
    },
    {
      value: "ahmedabad_mercantile_cooperative_bank",
      label: "AHMEDABAD MERCANTILE COOPERATIVE BANK",
    },
    {
      value: "airtel_payments_bank_limited",
      label: "AIRTEL PAYMENTS BANK LIMITED",
    },
    {
      value: "akola_janata_commercial_cooperative_bank",
      label: "AKOLA JANATA COMMERCIAL COOPERATIVE BANK",
    },
    {
      value: "alapuzha_district_cooperative_bank",
      label: "ALAPUZHA DISTRICT COOPERATIVE BANK",
    },
    {
      value: "alavi_cooperative_bank_limited",
      label: "ALAVI COOPERATIVE BANK LIMITED",
    },
    { value: "allahabad_bank", label: "ALLAHABAD BANK" },
    {
      value: "allahabad_district_cooperative_bank_limited",
      label: "ALLAHABAD DISTRICT COOPERATIVE BANK LIMITED",
    },
    { value: "allahabad_up_gramin_bank", label: "ALLAHABAD UP GRAMIN BANK" },
    {
      value: "almora_urban_cooperative_bank_limited",
      label: "ALMORA URBAN COOPERATIVE BANK LIMITED",
    },
  ];

  const handleInputChange = (event) => {
    const { value } = event.target;
    const newValue = value.replace(/\D/g, "").slice(0, 18);

    setBankAccountNumber(newValue);
    setBankDetails((prevDetails) => ({
      ...prevDetails,
      bankAccountNumber: newValue,
    }));
  };

  const handleBranchNameInputChange = (event) => {
    const { value } = event.target;
    const newValue = value.replace(/[^a-zA-Z\s]/g, "");

    setBranchName(newValue);
    setBankDetails((prevDetails) => ({
      ...prevDetails,
      branchName: newValue,
    }));
  };

  const validateIfsc = (value) => {
    const ifscRegex = /^[A-Z]{4}0[0-9]{6}$/;

    let upperCaseValue = value.toUpperCase();
    const firstPart = upperCaseValue.slice(0, 4).replace(/[^A-Z]/g, "");
    let secondPart = "";
    if (upperCaseValue.length > 4) {
      secondPart = upperCaseValue.slice(4, 5).replace(/[^0]/g, "");
    }
    let thirdPart = "";
    if (upperCaseValue.length > 5) {
      thirdPart = upperCaseValue.slice(5).replace(/[^A-Z0-9]/g, "");
    }

    const filteredValue = (firstPart + secondPart + thirdPart).slice(0, 11);
    setIfsc(filteredValue);
    setBankDetails((prevDetails) => ({
      ...prevDetails,
      ifsc: filteredValue,
    }));

    return ifscRegex.test(filteredValue);
  };

  const handleIfscInputChange = (e) => {
    const { value } = e.target;
    setValidIfsc(validateIfsc(value));
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setBankDetails((prevDetails) => ({
      ...prevDetails,
      bankName: selectedOption.label,
    }));
  };

  const isFormValid = () => {
    return (
      !errors.bankAccountNumber &&
      bankAccountNumber &&
      branchName &&
      ifsc &&
      selectedOption
    );
  };

  const handleSave = () => {
    console.log(bankDetails);
  };

  return (
    <>
      {/* <img
        src={close}
        className="h-4 w-4 mt-0 cursor-pointer"
        onClick={onClose}
      /> */}
      <CloseIcon   onClick={onClose}/>
      <div className="flex justify-between w-full sm:w-[68%] ">
        <label htmlFor="field11" className="w-[29%]  ">
          Bank Name:
        </label>

        <Select
          value={selectedOption}
          onChange={handleChange}
          options={bankOptions}
          placeholder="Select bank"
          className="h-10 w-[62%] mr-[74px] ml-4 border border-black rounded-md"
        />

        <div className=" w-40">
          <span className="p-1  border mt-4 rounded-2xl border-gray-500 bg-sky-200">
            Date: {currentDate}
          </span>
        </div>
      </div>

      <div className="flex justify-between w-full sm:w-[50%] relative ">
        <label htmlFor="field22" className="">
          Bank Account Number:
        </label>
        <img src={warning} className="absolute -top-4 h-6 w-6 ml-40" />

        <input
          type="text"
          name="field22"
          value={bankAccountNumber}
          onChange={handleInputChange}
          className="border border-black p-2 w-[67%] rounded-md "
          disabled={inputDisabled}
        />
      </div>


      <div className="flex justify-between w-full sm:w-[50%] relative">
        <label htmlFor="field33" className="w-1/3">
          Branch Name:
        </label>
        <img src={warning} className="absolute -top-5 h-6 w-6 ml-40" />
        <input
          type="text"
          name="field33"
          value={branchName}
          onChange={handleBranchNameInputChange}
          className="border border-black p-2 w-[70%] rounded-md"
        />
      </div>

      <div className="flex justify-between w-full sm:w-[64%] relative  ">
        <label htmlFor="field44" className=" w-1/3 ">
          IFSC:
        </label>
        <img src={warning} className="absolute -top-5 h-6 w-6 ml-40" />
        <input
          type="text"
          name="field44"
          value={ifsc}
          onChange={handleIfscInputChange}
          className="border border-black p-2 w-[70%] rounded-md "
        />
        {error && <span style={{ color: "red" }}>{error}</span>}
        <div className="">
        <button
          onClick={handleSave}
          disabled={!isFormValid()}
          className={`border border-blue-400  rounded-2xl w-28 h-10 ml-10  ${
            isFormValid()
              ? "bg-gray-300 text-blue-600"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Instantly Verify
        </button>
      </div>
      </div>

    </>
  );
}

export default BankInfo;