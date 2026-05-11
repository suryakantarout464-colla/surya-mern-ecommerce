import { Box, Typography, Menu, MenuItem, Button, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useNavigate } from "react-router-dom";

const Profile = ({ account, setAccount, closeDrawer }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    setAccount("");
    if (closeDrawer) closeDrawer();
    setTimeout(() => navigate("/"), 100);
    handleClose();
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        style={{
          textTransform: "none",
          fontWeight: 600,
          fontSize: 16,
          padding: "6px 12px",
          minWidth: 80,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: isMobile ? "#2874f0" : "#fff",
        }}
      >
        {account}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MenuItem onClick={handleLogout}>
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Typography style={{ marginLeft: 10 }}>Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Profile;
