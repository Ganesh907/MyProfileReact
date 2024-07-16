import React from 'react'

const MockDataTest = () => {
    const data = [

        {
            "enquiry_id": 185620,
            "question_id": 3,
            "question": "Proposed Centre Full Address with PIN Code",
            "answer": "dsgjhgfs",
            "enquiry_type": "VLE",
            "question_ctrl_type": "MultilineTextBox",
            "question_ctrl_value": "",
            "question_ctrl_length": 500,
            "is_mandatory": 1,
            "Do_It_Later": null,
            "is_document": 0
        },
        {
            "enquiry_id": 185620,
            "question_id": 134,
            "question": "Upload (Center Address Document)",
            "answer": "Passport",
            "enquiry_type": "VLE",
            "question_ctrl_type": "DropDownList",
            "question_ctrl_value": "",
            "question_ctrl_length": 0,
            "is_mandatory": 1,
            "Do_It_Later": null,
            "is_document": "HK Center Document"
        },
        {
            "enquiry_id": 185620,
            "question_id": 139,
            "question": "POA ( Proof of Addres)",
            "answer": "PAN Card",
            "enquiry_type": "VLE",
            "question_ctrl_type": "DropDownList",
            "question_ctrl_value": "",
            "question_ctrl_length": 0,
            "is_mandatory": 1,
            "Do_It_Later": null,
            "is_document": "HK Center Document"
        },
        {
            "enquiry_id": 185620,
            "question_id": 129,
            "question": "Education Qualification",
            "answer": "HSC",
            "enquiry_type": "VLE",
            "question_ctrl_type": "RadioButtonList",
            "question_ctrl_value": "QUALIFICATION",
            "question_ctrl_length": 0,
            "is_mandatory": 1,
            "Do_It_Later": null,
            "is_document": 0
        },
        {
            "enquiry_id": 185620,
            "question_id": 49,
            "question": "Knowledge of CSC/Aadhaar/EPIC/ MGNREGA etc.",
            "answer": "No",
            "enquiry_type": "VLE",
            "question_ctrl_type": "RadioButtonList",
            "question_ctrl_value": "YES_NO",
            "question_ctrl_length": 0,
            "is_mandatory": 0,
            "Do_It_Later": null,
            "is_document": 0
        },
        {
            "enquiry_id": 185620,
            "question_id": 2,
            "question": "Proposed Centre Premises",
            "answer": "Rented",
            "enquiry_type": "VLE",
            "question_ctrl_type": "RadioButtonList",
            "question_ctrl_value": "Owned_Rented",
            "question_ctrl_length": 0,
            "is_mandatory": 0,
            "Do_It_Later": null,
            "is_document": 0
        },
        {
            "enquiry_id": 185620,
            "question_id": 61,
            "question": "Aadhaar Centre Full Address with PIN Code",
            "answer": "kadsajsdkj",
            "enquiry_type": "VLE",
            "question_ctrl_type": "MultilineTextBox",
            "question_ctrl_value": "",
            "question_ctrl_length": 500,
            "is_mandatory": 1,
            "Do_It_Later": null,
            "is_document": "AadhaarCentreDocuments"
        },
        {
            "enquiry_id": 185620,
            "question_id": 50,
            "question": "Name of Operator / Supervisor",
            "answer": "jxbcznbxash",
            "enquiry_type": "VLE",
            "question_ctrl_type": "TextBox",
            "question_ctrl_value": "",
            "question_ctrl_length": 50,
            "is_mandatory": 1,
            "Do_It_Later": null,
            "is_document": 0
        },
        {
            "enquiry_id": 185620,
            "question_id": 51,
            "question": "Operator / Supervisor Aadhaar Number",
            "answer": "786876876876",
            "enquiry_type": "VLE",
            "question_ctrl_type": "TextBox",
            "question_ctrl_value": "",
            "question_ctrl_length": 12,
            "is_mandatory": 1,
            "Do_It_Later": null,
            "is_document": "Operator/Supervisor"
        },
        {
            "enquiry_id": 185620,
            "question_id": 52,
            "question": "UID Certificate(SIFY/NSEIT) Number",
            "answer": "kjhf7656",
            "enquiry_type": "VLE",
            "question_ctrl_type": "TextBox",
            "question_ctrl_value": "",
            "question_ctrl_length": 50,
            "is_mandatory": 0,
            "Do_It_Later": null,
            "is_document": "Operator/Supervisor"
        },
        {
            "enquiry_id": 185620,
            "question_id": 53,
            "question": "Supervisor / Operator Date Of Birth",
            "answer": "05-06-2013",
            "enquiry_type": "VLE",
            "question_ctrl_type": "DateTextBox",
            "question_ctrl_value": "WaterMark_DD/MM/YYYY",
            "question_ctrl_length": 10,
            "is_mandatory": 1,
            "Do_It_Later": null,
            "is_document": 0
        },
        {
            "enquiry_id": 185620,
            "question_id": 54,
            "question": "Verifier Name",
            "answer": "kdsfh",
            "enquiry_type": "VLE",
            "question_ctrl_type": "TextBox",
            "question_ctrl_value": "",
            "question_ctrl_length": 50,
            "is_mandatory": 1,
            "Do_It_Later": null,
            "is_document": "POI"
        },
        {
            "enquiry_id": 185620,
            "question_id": 55,
            "question": "Verifier Full Address with PIN Code",
            "answer": "xjcashdkhamzxbcmnbx 987987",
            "enquiry_type": "VLE",
            "question_ctrl_type": "MultilineTextBox",
            "question_ctrl_value": "",
            "question_ctrl_length": 500,
            "is_mandatory": 1,
            "Do_It_Later": null,
            "is_document": "POA"
        },
        {
            "enquiry_id": 185620,
            "question_id": 56,
            "question": "Verifier Mobile No",
            "answer": "8867565454",
            "enquiry_type": "VLE",
            "question_ctrl_type": "TextBox",
            "question_ctrl_value": "",
            "question_ctrl_length": 10,
            "is_mandatory": 1,
            "Do_It_Later": null,
            "is_document": 0
        },
        {
            "enquiry_id": 185620,
            "question_id": 57,
            "question": "Verifier Date of Birth",
            "answer": "04-06-2024",
            "enquiry_type": "VLE",
            "question_ctrl_type": "DateTextBox",
            "question_ctrl_value": "WaterMark_DD/MM/YYYY",
            "question_ctrl_length": 10,
            "is_mandatory": 1,
            "Do_It_Later": null,
            "is_document": 0
        },
        {
            "enquiry_id": 185620,
            "question_id": 58,
            "question": "Job/Department",
            "answer": "sjdfh",
            "enquiry_type": "VLE",
            "question_ctrl_type": "TextBox",
            "question_ctrl_value": "",
            "question_ctrl_length": 100,
            "is_mandatory": 1,
            "Do_It_Later": null,
            "is_document": 0
        },
        {
            "enquiry_id": 185620,
            "question_id": 59,
            "question": "Designation/Post of Verifier",
            "answer": "ksdjfh379ksh",
            "enquiry_type": "VLE",
            "question_ctrl_type": "TextBox",
            "question_ctrl_value": "",
            "question_ctrl_length": 100,
            "is_mandatory": 1,
            "Do_It_Later": null,
            "is_document": "Pensioner Details"
        },
        {
            "enquiry_id": 185620,
            "question_id": 60,
            "question": "Date of Retirment",
            "answer": "02-06-2024",
            "enquiry_type": "VLE",
            "question_ctrl_type": "DateTextBox",
            "question_ctrl_value": "WaterMark_DD/MM/YYYY",
            "question_ctrl_length": 10,
            "is_mandatory": 1,
            "Do_It_Later": null,
            "is_document": 0
        }
    ];
    const renderControl = (item) => {
        debugger;
        switch (item.question_ctrl_type) {
            case 'MultilineTextBox':

                if (item.answer == null) {

                    return (
                        <textarea
                            id={`question_${item.question_id}`}
                            rows="4"
                            cols="50"
                            maxLength={item.question_ctrl_length}
                            defaultValue={item.answer}
                            required={item.is_mandatory}
                        />
                    );
                }
                else {
                    return (
                        <label> {item.answer} </label>
                    );
                }
            case 'TextBox':
                return (
                    <input
                        id={`question_${item.question_id}`}
                        maxLength={item.question_ctrl_length}
                        defaultValue={item.answer}
                        required={item.is_mandatory}
                    />
                );
            case 'DropDownList':
                const options = item.answer.split(','); // Assuming answer contains comma-separated options
                return (
                    <select id={`question_${item.question_id}`} required={item.is_mandatory}>
                        {options.map((optionValue, index) => (
                            <option key={index} value={optionValue.trim()}>
                                {optionValue.trim()}
                            </option>
                        ))}
                    </select>
                );
            case 'RadioButtonList':
                const radioOptions = item.question_ctrl_value.split(','); // Assuming question_ctrl_value contains comma-separated options
                return (
                    <div id={`question_${item.question_id}`}>
                        {radioOptions.map((optionValue, index) => (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name={`question_${item.question_id}`}
                                    value={optionValue.trim()}
                                    required={item.is_mandatory}
                                />
                                {optionValue.trim()}
                            </label>
                        ))}
                    </div>
                );
            default:
                return (
                    <input
                        type="text"
                        id={`question_${item.question_id}`}
                        defaultValue={item.answer}
                        required={item.is_mandatory}
                    />
                );
        }
    };
    return (
        <div id="form-container">
            {data.map((item) => (
                <div key={item.question_id} className="question-container">
                    <label htmlFor={`question_${item.question_id}`}>{item.question}</label>
                    {renderControl(item)}
                </div>
            ))}
        </div>
    );
};
export default MockDataTest