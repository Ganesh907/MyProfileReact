
import React, { useState } from "react";
import pencil from "../../../../Images/pencil.png";
import doublecheck from "../../../../Images/double-check.gif";
import GST from "./GST";
import BankInfo from "./BankInfoComponent";


const EditableForm = () => {
  const [formData, setFormData] = useState({
    field1: "John Doe",
    field2: "Manager",
    field3: "john.doe@example.com",
    field4: "123-456-7890",
    field11: "Bank of America",
    field22: "1234567890",
    field33: "Main Branch",
    field44: "BOFAUS3N",
    field55: "2023-01-01",
    field111: "Wells Fargo",
    field222: "0987654321",
    field333: "Downtown Branch",
    field51: "123412ABC",
    field52: "individual",
    field53: "AB12345Z",
  });

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editField, setEditField] = useState("");

  const goToProfileEdit = (field) => {
    setEditField(field);
    setIsEditOpen(true);
  };
  const closeProfileEdit = () => {
    setIsEditOpen(false);
    setEditField("");
  };

  const [isEditOpen1, setIsEditOpen1] = useState(false);
  const [editField1, setEditField1] = useState("");

  const goToProfileEdit1 = (field) => {
    setEditField1(field);
    setIsEditOpen1(true);
  };
  console.log({ isEditOpen1 });
  const closeProfileEdit1 = () => {
    setIsEditOpen1(false);
    setEditField1("");
  };

  return (
    <div>
      {/* <div className="w-full h-auto flex justify-center items-center p-4">
        <div className="w-[90%] h-full flex flex-col border border-black gap-6 p-4">
          <div className="flex justify-between w-full sm:w-[50%]">
            <label className="w-1/3">Reporting Manager:</label>

            <span className="w-2/3">{formData.field1}</span>
          </div>

          <div className="flex justify-between w-full sm:w-[50%]">
            <label className="w-1/3">Manager's Role:</label>

            <span className="w-2/3">{formData.field2}</span>
          </div>

          <div className="flex justify-between w-full sm:w-[50%]">
            <label className="w-1/3">Manager's Email:</label>

            <span className="w-2/3">{formData.field3}</span>
          </div>

          <div className="flex justify-between w-full sm:w-[50%]">
            <label className="w-1/3">Manager's Mobile No:</label>

            <span className="w-2/3">{formData.field4}</span>
          </div>
        </div>
      </div> */}

      {/* <div className="w-full h-auto flex justify-center items-center bg-red-300 "> */}
        <div className="w-full  flex flex-col border border-black gap-6 p-4">
          {!isEditOpen && (
            <>
              <div className="flex justify-between w-full sm:w-[50%] relative">
                <img
                  src={pencil}
                  alt="Edit"
                  className="absolute cursor-pointer h-4 w-4 ml-40  "
                  onClick={() => goToProfileEdit("field11")}
                />
                <label className="w-1/3">Bank Name:</label>
                <span className="w-2/3">{formData.field11}</span>
              </div>

              <div className="flex justify-between w-full sm:w-[50%] relative">
                <label className="w-1/3">Bank Account Number:</label>
                <span className="w-2/3">{formData.field22}</span>
                <img src={doublecheck} className=" absolute h-6 w-6 ml-72" />
              </div>

              <div className="flex justify-between w-full sm:w-[50%]">
                <label className="w-1/3">Branch Name:</label>
                <span className="w-2/3">{formData.field33}</span>
              </div>

              <div className="flex justify-between w-full sm:w-[50%]">
                <label className="w-1/3">IFSC:</label>
                <span className="w-2/3">{formData.field44}</span>
              </div>

              <div className="flex justify-between w-full sm:w-[50%]">
                <label className="w-1/3">Date Registered:</label>
                <span className="w-2/3">{formData.field55}</span>
              </div>
            </>
          )}

          {isEditOpen && editField === "field11" && (
            <BankInfo onClose={closeProfileEdit} />
          )}
        </div>
      {/* </div> */}

      {/* <div className="w-full h-auto flex justify-center items-center p-4">
        <div className="w-[90%] h-full flex flex-col border border-black gap-6 p-4">
          <div className="flex justify-between w-full sm:w-[50%]">
            <label className="w-1/3">Bank Name:</label>

            <span className="w-2/3">{formData.field111}</span>
          </div>

          <div className="flex justify-between w-full sm:w-[50%]">
            <label className="w-1/3">Bank Account Number:</label>

            <span className="w-2/3">{formData.field222}</span>
          </div>

          <div className="flex justify-between w-full sm:w-[50%]">
            <label className="w-1/3">Branch Name:</label>

            <span className="w-2/3">{formData.field333}</span>
          </div>
        </div>
      </div> */}

      {/* <div className="w-full h-auto flex justify-center items-center p-4"> */}
        <div className="w-full h-full flex flex-col  mt-5 border border-black gap-6 p-4">
          {!isEditOpen1 && (
            <>
              <div className="flex justify-between w-full sm:w-[50%] relative">
                <img
                  src={pencil}
                  alt="Edit"
                  className="absolute cursor-pointer h-4 w-4 ml-40  "
                  onClick={() => goToProfileEdit1("field51")}
                />
                <label className="w-1/3">PAN NO:</label>

                <span className="w-2/3">{formData.field51}</span>
                <img src={doublecheck} className=" absolute h-6 w-6 ml-[50%]" />
                <div className="w-[1px]">
                  <p className="underline  ">FileName</p>
                </div>
              </div>

              <div className="flex justify-between w-full sm:w-[50%]">
                <label className="w-1/3">Taxation Type:</label>

                <span className="w-2/3">{formData.field52}</span>
              </div>

              <div className="flex justify-between w-full sm:w-[50%] relative">
                <label className="w-1/3">GST Number & Document:</label>

                <span className="w-[66%]">{formData.field53}</span>
                <img src={doublecheck} className=" absolute h-6 w-6 ml-[50%]" />
                <div className="w-[1px]">
                  <p className="underline  ">FileName</p>
                </div>
              </div>
            </>
          )}

          {isEditOpen1 && editField1 === "field51" && (
            <GST onClose={closeProfileEdit1} />
          )}
          
        </div>
      </div>
//      </div>
  );
};

export default EditableForm;