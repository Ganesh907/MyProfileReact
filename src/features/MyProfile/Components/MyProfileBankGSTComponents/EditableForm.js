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
      <fieldset className="w-full  flex flex-col border border-black gap-6 p-4">
        <legend className="font-bold ml-10">BankInfo</legend>
        {!isEditOpen && (
          <>
            <div className="flex justify-between w-full sm:w-[50%] relative">
              <img
                src={pencil}
                alt="Edit"
                className="absolute cursor-pointer h-5 w-5 ml-[70%]  "
                onClick={() => goToProfileEdit("field11")}
              />
              <label className="w-1/3 font-bold ml-16">Bank Name:</label>
              <span className="w-2/3 pl-[55px]">{formData.field11}</span>
            </div>

            <div className="flex justify-between w-full sm:w-[50%] relative">
              <label className="w-1/2 font-bold ml-16">
                Bank Account Number:
              </label>
              <span className="w-2/3 pl-38">{formData.field22}</span>
              <img src={doublecheck} className=" absolute h-10 w-10 ml-[63%]" />
            </div>

            <div className="flex justify-between w-full sm:w-[50%]">
              <label className="w-1/3 font-bold ml-16">Branch Name:</label>
              <span className="w-2/3 pl-[58px]">{formData.field33}</span>
            </div>

            <div className="flex justify-between w-full sm:w-[50%]">
              <label className="w-1/3 font-bold ml-16">IFSC:</label>
              <span className="w-2/3 pl-[58px]">{formData.field44}</span>
            </div>

            <div className="flex justify-between w-full sm:w-[50%]">
              <label className="w-1/3 font-bold ml-16">Date Registered:</label>
              <span className="w-2/3 pl-[58px]">{formData.field55}</span>
            </div>
          </>
        )}

        {isEditOpen && editField === "field11" && (
          <BankInfo onClose={closeProfileEdit} />
        )}
      </fieldset>

      <fieldset className="w-full h-full flex flex-col  mt-5 border border-black gap-6 p-4">
        <legend className="font-bold ml-10 ">TexInfo</legend>
        {!isEditOpen1 && (
          <>
            <div className="flex justify-between  w-full sm:w-[50%] relative">
              <img
                src={pencil}
                alt="Edit"
                className="absolute cursor-pointer h-5 w-5 ml-[64%] "
                onClick={() => goToProfileEdit1("field51")}
              />
              <label className="w-1/3 font-bold ml-16">PAN NO:</label>

              <span className="w-2/3 pl-[58px]">{formData.field51}</span>
              <img src={doublecheck} className=" absolute h-10 w-10 ml-[68%]" />
              <div className="w-[1px]">
                <p className="underline text-xs ml-[336px] ">FileName</p>
              </div>
            </div>

            <div className="flex justify-between w-full sm:w-[50%]">
              <label className="w-1/3 font-bold ml-16">Taxation Type:</label>

              <span className="w-2/3 pl-[60px]">{formData.field52}</span>
            </div>

            <div className="flex justify-between w-full sm:w-[50%] relative">
              <label className="w-1/2 font-bold ml-16">
                GST Number & Document:
              </label>

              <span className="w-[66%] pl-[5px]">{formData.field53}</span>
              <img src={doublecheck} className=" absolute h-10 w-10 ml-[68%]" />
              <div className="w-[1px] ">
                <p className="underline text-xs ml-[336px] ">FileName</p>
              </div>
            </div>
          </>
        )}

        {isEditOpen1 && editField1 === "field51" && (
          <GST onClose={closeProfileEdit1} />
        )}
      </fieldset>
    </div>
  );
};

export default EditableForm;
