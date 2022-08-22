import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Container,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { SPACING } from "../../../constants/styleGuide";
import NavBar from "../navbar/NavBar";
import Logout from "./Logout";

const UserProfile = () => {
  const allInfo = JSON.parse(sessionStorage.getItem("userInfo"));

  return (
    <div>
      <NavBar />
      <Container maxWidth="md">
        <div className="heading">
          <h1>My Profile</h1>
        </div>
        <div className="formContainer">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={SPACING.s12}>
              <Grid item xs={SPACING.s12}>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    User ID
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={allInfo.id}
                    // onChange={handleChange("amount")}
                    label="ID"
                    disabled
                  />
                </FormControl>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={SPACING.s6}>
              <Grid item xs={SPACING.s6}>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    First Name
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={allInfo.firstName}
                    // onChange={handleChange("amount")}
                    label="First Name"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={SPACING.s6}>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Last Name
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value="oo"
                    // onChange={handleChange("amount")}
                    label="Last Name"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={SPACING.s6}>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={allInfo.email}
                    // onChange={handleChange("amount")}
                    label="Email"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={SPACING.s6}>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={allInfo.setPassword}
                    // onChange={handleChange("amount")}
                    label="Password"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={SPACING.s12}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth="true"
                  // onClick={login}
                >
                  Update
                </Button>
              </Grid>
            </Grid>
            <br />
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default UserProfile;
