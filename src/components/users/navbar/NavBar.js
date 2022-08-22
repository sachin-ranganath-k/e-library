import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { NavItems } from "./NavItems";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  // const userData = useSelector((state) => state.userReducer.userDetails);
  let userEmail = sessionStorage.getItem("userEmail");
  // React.useEffect(() => {
  //   window.sessionStorage.getItem(
  //     "userEmail",
  //     JSON.stringify(userData.userEmail)
  //   );
  // }, []);

  // React.useEffect(() => {
  //   window.sessionStorage.setItem(
  //     "userEmail",
  //     JSON.stringify(userData.userEmail)
  //   );
  // }, [userData.userEmail]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {userEmail}
          </Typography>
          <div style={{marginLeft:"65%"}}>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {NavItems.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={(e) => navigate(page.path)}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
