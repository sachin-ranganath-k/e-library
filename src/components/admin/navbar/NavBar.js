import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const pages = ["Upload Books"];

const NavBar = () => {
  const adminData = useSelector((state) => state.adminReducer.adminDetails);
  const navigate = useNavigate();

  React.useEffect(() => {
    window.localStorage.getItem(
      "userEmail",
      JSON.stringify(adminData.adminData)
    );
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem(
      "adminEmail",
      JSON.stringify(adminData.adminData)
    );
  }, [adminData.adminData]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {adminData.adminEmail}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => navigate("/UploadBooks")}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
