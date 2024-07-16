import { Box, Tab, Tabs } from "@mui/material";
import { grey } from "@mui/material/colors";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import Myprofileinfocomponent from "./Myprofileinfocomponent.js";
import Tabbar from "./TabBar.js";
// import PopupComponent from "./PopupComponent";
// import LeadOverView from "./LeadOverView";

const dummyData = {
  SrNo: "",
  LeadId: "",
  LeadDate: "",
  PartnerName: "",
  Cluster: "",
  EmailId: "",
  MobileNo: "",
  LeadType: "",
  LeadOwner: "",
};

function setPendingHeaderName(key) {
  switch (key) {
    case "HK_ID":
      key = "HK ID";
      break;
    case "User_Role":
      key = "User Role";
      break;
    case "Request_Date":
      key = "Request Date";
      break;
    case "Email_ID":
      key = "Email ID";
      break;
    case "Mobile_No":
      key = "Mobile No";
      break;
    case "Total_Qs":
      key = "Total Qs";
      break;
    case "Rejected_Qs":
      key = "Rejected Qs";
      break;
    case "Pending_Qs":
      key = "Pending Qs";
      break;
    case "Approved_Qs":
      key = "Approved Qs";

      break;
    default:
      break;
  }
  return key;
}

const leadDataList = [
  {
    HK_ID: "HK001",
    User_Role: "Admin",
    Request_Date: "2024-06-15",
    Name: "John Doe",
    Cluster: "Cluster1",
    Region: "North",
    Email_ID: "johndoe@example.com",
    Mobile_No: "1234567890",
    Total_Qs: 100,
    Rejected_Qs: 5,
    Pending_Qs: 10,
    Approved_Qs: 85,
  },
  {
    HK_ID: "HK002",
    User_Role: "User",
    Request_Date: "2024-06-16",
    Name: "Jane Smith",
    Cluster: "Cluster2",
    Region: "South",
    Email_ID: "janesmith@example.com",
    Mobile_No: "0987654321",
    Total_Qs: 200,
    Rejected_Qs: 10,
    Pending_Qs: 15,
    Approved_Qs: 175,
  },
  {
    HK_ID: "HK003",
    User_Role: "Moderator",
    Request_Date: "2024-06-17",
    Name: "Alice Johnson",
    Cluster: "Cluster3",
    Region: "East",
    Email_ID: "alicejohnson@example.com",
    Mobile_No: "1122334455",
    Total_Qs: 150,
    Rejected_Qs: 8,
    Pending_Qs: 12,
    Approved_Qs: 130,
  },
  {
    HK_ID: "HK004",
    User_Role: "Admin",
    Request_Date: "2024-06-18",
    Name: "Bob Brown",
    Cluster: "Cluster4",
    Region: "West",
    Email_ID: "bobbrown@example.com",
    Mobile_No: "2233445566",
    Total_Qs: 250,
    Rejected_Qs: 15,
    Pending_Qs: 20,
    Approved_Qs: 215,
  },
  {
    HK_ID: "HK005",
    User_Role: "User",
    Request_Date: "2024-06-19",
    Name: "Charlie Davis",
    Cluster: "Cluster1",
    Region: "North",
    Email_ID: "charliedavis@example.com",
    Mobile_No: "3344556677",
    Total_Qs: 300,
    Rejected_Qs: 20,
    Pending_Qs: 25,
    Approved_Qs: 255,
  },
];

const Allstatuscomponent= () => {
  const [value, setValue] = useState(0);
  const [rows, setRows] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  // const color = "bg-[#D3D3D3] font-bold";

  useEffect(() => {
    // Add SrNo to each row
    const updatedRows = leadDataList.map((row, index) => ({
      ["Sr No."]: index + 1,
      ...row,
    }));
    console.log("updatedRows", updatedRows);
    setRows(updatedRows);
  }, []);

  // const columns =
  //   leadDataList.length !== 0
  //     ? Object.keys(leadDataList[0]).map((key, id) => {
  //         return {
  //           field: key,
  //           headerName: setPendingHeaderName(key),
  //           flex: 1,
  //           minWidth: 150,
  //           headerClassName: "grid-header-style",
  //         };
  //       })
  //     : Object.keys(dummyData).map((key, id) => {
  //         return {
  //           field: key,
  //           headerName: key,
  //           headerClassName: "grid-header-style",
  //           flex: 1,
  //           minWidth: 150,
  //         };
  //       });

  const columns =
    rows.length !== 0
      ? Object.keys(rows[0]).map((key, id) => {
          return {
            field: key,
            headerName: setPendingHeaderName(key),
            flex: 1,
            minWidth: 150,
            // headerClassName: "grid-header-style",
            headerClassName: "bg-gray-300",
          };
        })
      : Object.keys(dummyData).map((key, id) => {
          return {
            field: key,
            headerName: key,
            headerClassName: "bg-grey",
            flex: 1,
            minWidth: 150,
          };
        });

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleRowClick = (params) => {
    const rowData = params.row;
    console.log({ rowData });
    console.log(openPopup)
    setOpenPopup(true);
    console.log(openPopup)
    
//     console.log(openPopup);
//     <PopupComponent
//       openPopup={openPopup}
//       setOpenPopup={setOpenPopup}
//       handleCloseExtraFeature={() => {
//         window.location.reload();
//         setOpenPopup(false);
//       }}
//     >
      {/* <ScoFIPaymentDetails EnquiryId={params.id}></ScoFIPaymentDetails> */}
//       <LeadOverView />
//     </PopupComponent>;

    // setLeadOverviewProps({
    //   ...leadOverviewProps,
    //   EnquiryId : rowData.Enquiry_id
    // })
    // setIsLeadOverview(true);
    // setIsLoading(true);
  };

  return (
    <div>
        {
        openPopup ? 
        <Myprofileinfocomponent/>
        
        :        


<>
<Tabbar/>
      {/* <Box sx={{}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Item One"
            {...a11yProps(0)}
            sx={{
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
              padding: "8px 16px",
              "&.Mui-selected": {
                borderColor: "primary.main",
              },
            }}
          />
          <Tab
            className=""
            label="Item Two"
            {...a11yProps(1)}
            sx={{
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
              padding: "8px 16px",
              "&.Mui-selected": {
                borderColor: "primary.main",
              },
            }}
          />
        </Tabs>
      </Box> */}
     

      <DataGrid
        rowSpacingType="border"
        rows={rows}
        
        getRowId={(row) => row.HK_ID}
        columns={columns}
        density="compact"
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        onRowClick={handleRowClick}
        sx={{
          "& .grid-header-style": {
            backgroundColor: grey,
            textTransform: "capitalize",
            "& .MuiDataGrid-row": {
              borderTopColor: "#ccc",
              borderTopStyle: "solid",
            },
            fontWeight: "bold",
          },
        }}
        style={{ height: "400px" }}
        pageSizeOptions={[5, 10, 25]}
      />

      </>
     
}
    </div>
  );
};

export default Allstatuscomponent;


                {/* disableRowSelectionOnClick
        // getRowSpacing={getRowSpacing}
        // slots={{
        //   noRowsOverlay: MyCustomNoRowsOverlay,
        //   // toolbar:GridToolbar
        // }}
        // slotProps={{
        //   pagination: {
        //     ActionsComponent: TablePaginationActions,
        //   },
        // }} */}
// {/* 
//  /* <CustomTabPanel value={value} index={0}>
//         Item One
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         Item Two
//       </CustomTabPanel> */

//        /* {openPopup && (
//         <PopupComponent
//           openPopup={openPopup}
//           setOpenPopup={setOpenPopup}
//           handleCloseExtraFeature={() => {
//             window.location.reload();
//             setOpenPopup(false);
//           }}
//         >
//           {/* <LeadOverView /> */
//         /* </PopupComponent>
//       )} */ 