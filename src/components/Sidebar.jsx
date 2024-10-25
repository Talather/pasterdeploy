// src/components/Sidebar.jsx
// import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, Divider } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import { Link } from "react-router-dom";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        background: "#1A1A24",
        width: 70,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 70,
          boxSizing: "border-box",
          background: "linear-gradient(-45deg, #ac32e4, #7918f2, #4801ff)",
          boxShadow: "none",
        },
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}
      >
        <MarkChatUnreadIcon sx={{ color: "white" }} />
      </div>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <ListItem
          button
          component={Link}
          to="/home"
          sx={{ justifyContent: "center" }}
        >
          <ListItemIcon sx={{ minWidth: 0 }}>
            <BarChartIcon sx={{ color: "white" }} />
          </ListItemIcon>
        </ListItem>
        <Divider />
        <ListItem
          button
          component={Link}
          to="/main"
          sx={{ justifyContent: "center" }}
        >
          <ListItemIcon sx={{ minWidth: 0 }}>
            <EditLocationAltIcon sx={{ color: "white" }} />
          </ListItemIcon>
        </ListItem>
        <Divider />
        <ListItem
          button
          component={Link}
          to="/contact"
          sx={{ justifyContent: "center" }}
        >
          <ListItemIcon sx={{ minWidth: 0 }}>
            <AutoAwesomeMotionIcon sx={{ color: "white" }} />
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
