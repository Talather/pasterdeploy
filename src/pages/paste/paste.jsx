// import { Margin } from '@mui/icons-material'
// import React from 'react'
// import { TextField } from "@mui/material";
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { Brightness1 } from "@mui/icons-material";
import TabsComponent from "../../components/tabs/tabs";

const Paste = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "linear-gradient(-45deg, #ac32e4, #7918f2, #4801ff)",
        color: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {/* <div style={{
              borderRadius:"6px",
            marginTop: "5vw", backgroundImage: "url('/assets/images.png')", backgroundSize: "cover", backgroundPosition: "center", height: "74vh", width: "75vw"
          }}> */}

      <TabsComponent />

      {/* </div> */}
    </div>
  );
};

export default Paste;
