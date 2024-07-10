// import { useState, useEffect } from "react";
// import warning from "../../../../assets/images/warningGif.gif";
// import React from "react";
// import Select from "react-select";
// import CloseIcon from "@mui/icons-material/Close";

// function BankInfo({ onClose }) {
//   const [currentDate, setCurrentDate] = useState("");
//   const [bankAccountNumber, setBankAccountNumber] = useState("");
//   const [branchName, setBranchName] = useState("");
//   const [ifsc, setIfsc] = useState("");
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [inputDisabled, setInputDisabled] = useState(false);
//   const [validIfsc, setValidIfsc] = useState(true);
//   const [error, setError] = useState("");
//   const [errors, setErrors] = useState({});

//   const [bankDetails, setBankDetails] = useState({
//     bankName: "",
//     bankAccountNumber: "",
//     branchName: "",
//     ifsc: "",
//     currentDate: "",
//   });

//   console.log({ bankDetails });

//   useEffect(() => {
//     const date = new Date();
//     const formattedDate = date.toLocaleDateString();
//     setCurrentDate(formattedDate);
//     setBankDetails((prevDetails) => ({
//       ...prevDetails,
//       currentDate: formattedDate,
//     }));
//   }, []);

//   const bankOptions = [
//     {
//       value: "ap_mahesh_cooperative_urban_bank_limited",
//       label: "AP MAHESH COOPERATIVE URBAN BANK LIMITED",
//     },
//     {
//       value: "abhyudaya_cooperative_bank_limited",
//       label: "ABHYUDAYA COOPERATIVE BANK LIMITED",
//     },
//     {
//       value: "abhyudaya_mahila_urban_cooperative_bank_limited",
//       label: "ABHYUDAYA MAHILA URBAN COOPERATIVE BANK LIMITED",
//     },
//     { value: "abu_dhabi_commercial_bank", label: "ABU DHABI COMMERCIAL BANK" },
//     {
//       value: "ace_cooperative_bank_limited",
//       label: "ACE COOPERATIVE BANK LIMITED",
//     },
//     {
//       value: "adarsh_cooperative_bank_limited",
//       label: "ADARSH COOPERATIVE BANK LIMITED",
//     },
//     {
//       value: "ahilyadevi_urban_cooperative_bank_limited",
//       label: "AHILYADEVI URBAN COOPERATIVE BANK LIMITED",
//     },
//     {
//       value: "ahmedabad_mercantile_cooperative_bank",
//       label: "AHMEDABAD MERCANTILE COOPERATIVE BANK",
//     },
//     {
//       value: "airtel_payments_bank_limited",
//       label: "AIRTEL PAYMENTS BANK LIMITED",
//     },
//     {
//       value: "akola_janata_commercial_cooperative_bank",
//       label: "AKOLA JANATA COMMERCIAL COOPERATIVE BANK",
//     },
//     {
//       value: "alapuzha_district_cooperative_bank",
//       label: "ALAPUZHA DISTRICT COOPERATIVE BANK",
//     },
//     {
//       value: "alavi_cooperative_bank_limited",
//       label: "ALAVI COOPERATIVE BANK LIMITED",
//     },
//     { value: "allahabad_bank", label: "ALLAHABAD BANK" },
//     {
//       value: "allahabad_district_cooperative_bank_limited",
//       label: "ALLAHABAD DISTRICT COOPERATIVE BANK LIMITED",
//     },
//     { value: "allahabad_up_gramin_bank", label: "ALLAHABAD UP GRAMIN BANK" },
//     {
//       value: "almora_urban_cooperative_bank_limited",
//       label: "ALMORA URBAN COOPERATIVE BANK LIMITED",
//     },
//   ];

//   const handleInputChange = (event) => {
//     const { value } = event.target;
//     const newValue = value.replace(/\D/g, "").slice(0, 18);

//     setBankAccountNumber(newValue);
//     setBankDetails((prevDetails) => ({
//       ...prevDetails,
//       bankAccountNumber: newValue,
//     }));
//   };

//   const handleBranchNameInputChange = (event) => {
//     const { value } = event.target;
//     const newValue = value.replace(/[^a-zA-Z\s]/g, "");

//     setBranchName(newValue);
//     setBankDetails((prevDetails) => ({
//       ...prevDetails,
//       branchName: newValue,
//     }));
//   };

//   const validateIfsc = (value) => {
//     const ifscRegex = /^[A-Z]{4}0[0-9]{6}$/;

//     let upperCaseValue = value.toUpperCase();
//     const firstPart = upperCaseValue.slice(0, 4).replace(/[^A-Z]/g, "");
//     let secondPart = "";
//     if (upperCaseValue.length > 4) {
//       secondPart = upperCaseValue.slice(4, 5).replace(/[^0]/g, "");
//     }
//     let thirdPart = "";
//     if (upperCaseValue.length > 5) {
//       thirdPart = upperCaseValue.slice(5).replace(/[^A-Z0-9]/g, "");
//     }

//     const filteredValue = (firstPart + secondPart + thirdPart).slice(0, 11);
//     setIfsc(filteredValue);
//     setBankDetails((prevDetails) => ({
//       ...prevDetails,
//       ifsc: filteredValue,
//     }));

//     let specificError = "";
//     if (filteredValue.length !== 11) {
//       specificError = "IFSC code must be 11 characters";
//     } else if (!/^[A-Z]{4}/.test(filteredValue)) {
//       specificError = "First four characters must be letters";
//     } else if (filteredValue[4] !== "0") {
//       specificError = "Fifth character must be zero";
//     } else if (!/[0-9]{6}$/.test(filteredValue)) {
//       specificError = "Last six characters must be digits";
//     }

//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       ifsc: specificError || "",
//     }));

//     return ifscRegex.test(filteredValue);
//   };

//   const handleIfscInputChange = (e) => {
//     const { value } = e.target;
//     setValidIfsc(validateIfsc(value));
//   };

//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//     setBankDetails((prevDetails) => ({
//       ...prevDetails,
//       bankName: selectedOption.label,
//     }));
//   };

//   const isFormValid = () => {
//     return (
//       !errors.bankAccountNumber &&
//       bankAccountNumber &&
//       branchName &&
//       ifsc &&
//       selectedOption
//     );
//   };

//   const handleSave = () => {
//     console.log(bankDetails);
//   };

//   return (
//     <>

//       <CloseIcon onClick={onClose} />
//       <div className="flex justify-between w-full sm:w-[68%] ">
//         <label htmlFor="field11" className="w-[29%]  ">
//           Bank Name:
//         </label>

//         <Select
//           value={selectedOption}
//           onChange={handleChange}
//           options={bankOptions}
//           placeholder="Select bank"
//           className="size-10 w-[64%] mr-[57px] ml-4 border border-black rounded-md"
//         />

//         <div className="flex  w-40 mr-10">
//           <span className=" p-1 border  rounded-2xl border-gray-500 bg-sky-200">
//             Date: {currentDate}
//           </span>
//         </div>
//       </div>

//       <div className="flex justify-between w-full sm:w-[50%]  ">
//         <label htmlFor="field22" className="">
//           Bank Account Number:
//         </label>
//         <img src={warning} className=" h-6 w-6 " />

//         <input
//           type="text"
//           name="field22"
//           value={bankAccountNumber}
//           onChange={handleInputChange}
//           className="border border-black p-2 w-[67%] rounded-md "
//           disabled={inputDisabled}
//         />
//       </div>

//       <div className="flex justify-between w-full sm:w-[50%] ">
//         <label htmlFor="field33" className="w-1/3">
//           Branch Name:
//         </label>
//         <img src={warning} className=" h-6 w-6 mr-4  " />
//         <input
//           type="text"
//           name="field33"
//           value={branchName}
//           onChange={handleBranchNameInputChange}
//           className="border border-black p-2 w-[83%] rounded-md"
//         />
//       </div>

//       <div className="flex justify-between w-full sm:w-[64%]   ">
//         <label htmlFor="field44" className=" w-1/3 ">
//           IFSC:
//         </label>
//         <img src={warning} className=" h-6 w-6 mr-4" />
//         <input
//           type="text"
//           name="field44"
//           value={ifsc}
//           onChange={handleIfscInputChange}
//           className="border border-black p-2 w-[83%] mr-4 rounded-md "
//         />
//         {errors.ifsc && <span style={{ color: "red" }}>{errors.ifsc}</span>}
//         <div className="w-[30%] flex gap-1">
//           <button
//             onClick={handleSave}
//             disabled={!isFormValid()}
//             className={`border border-blue-400  rounded-2xl w-28 h-10 ml-10  ${
//               isFormValid()
//                 ? "bg-gray-300 text-blue-600"
//                 : "bg-gray-200 text-gray-400 cursor-not-allowed"
//             }`}
//           >
//             Instantly Verify
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BankInfo;


import { useState, useEffect } from "react";
import warning from "../../../../assets/images/warningGif.gif";
import React from "react";
import Select from "react-select";
import CloseIcon from "@mui/icons-material/Close";

function BankInfo({ onClose }) {
  const [currentDate, setCurrentDate] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [branchName, setBranchName] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
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

    let specificError = "";
    if (filteredValue.length !== 11) {
      specificError = "IFSC code must be 11 characters";
    } else if (!/^[A-Z]{4}/.test(filteredValue)) {
      specificError = "First four characters must be letters";
    } else if (filteredValue[4] !== "0") {
      specificError = "Fifth character must be zero";
    } else if (!/[0-9]{6}$/.test(filteredValue)) {
      specificError = "Last six characters must be digits";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      ifsc: specificError || "",
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

      <CloseIcon onClick={onClose} />
      <div className="flex justify-between w-full sm:w-[68%] ">
        <label htmlFor="field11" className="w-[29%]  ">
          Bank Name:
        </label>

        <Select
          value={selectedOption}
          onChange={handleChange}
          options={bankOptions}
          placeholder="Select bank"
          className="size-10 w-[59%] mr-[84px] border border-black rounded-md"
        />

        <div className="  w-40 ">
          <span className=" p-1 border  rounded-2xl border-gray-500 bg-sky-200">
            Date: {currentDate}
          </span>
        </div>
      </div>

      <div className="flex justify-between w-full sm:w-[50%]  ">
        <label htmlFor="field22" className="">
          Bank Account Number:
        </label>
        <img src={warning} className=" h-6 w-6 " />

        <input
          type="text"
          name="field22"
          value={bankAccountNumber}
          onChange={handleInputChange}
          className="border border-black p-2 w-[67%] rounded-md "
          disabled={inputDisabled}
        />
      </div>

      <div className="flex justify-between w-full sm:w-[50%] ">
        <label htmlFor="field33" className="w-1/3">
          Branch Name:
        </label>
        <img src={warning} className=" h-6 w-6 mr-4  " />
        <input
          type="text"
          name="field33"
          value={branchName}
          onChange={handleBranchNameInputChange}
          className="border border-black p-2 w-[83%] rounded-md"
        />
      </div>

      <div className="flex justify-between w-full sm:w-[64%]   ">
        <label htmlFor="field44" className=" w-1/3 ">
          IFSC:
        </label>
        <img src={warning} className=" h-6 w-6 mr-4" />
        <input
          type="text"
          name="field44"
          value={ifsc}
          onChange={handleIfscInputChange}
          className="border border-black p-2 w-[83%] mr-4 rounded-md "
        />
        {errors.ifsc && <span style={{ color: "red" }}>{errors.ifsc}</span>}
        <div className="w-[30%] flex gap-1">
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