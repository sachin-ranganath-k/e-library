import React, { useState } from "react";
import {
  Box,
  Grid,
  Container,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import { SPACING } from "../../../constants/styleGuide";
import { REGISTER, TOASTER } from "../../../constants/constants";
import axios from "axios";
import {Link} from "react-router-dom";
import '../scss/UserRegister.scss'

const UserRegister = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    setPassword: "",
    confirmPassword: "",
  });
  const [gender, setGender] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { firstName, lastName, email, setPassword, confirmPassword } = inputs;

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const apiCall = () => {
    axios
      .post("http://localhost:3001/users", inputs)
      .then(() => {
        setSuccessMessage(true);
        setErrorMessage(false);
      })
      .catch(() => {
        setSuccessMessage(false);
        setErrorMessage(true);
      });
  };

  const formSubmit = () => {
    if (setPassword !== confirmPassword) {
      alert("error", TOASTER.INVALID_PASSWORD);
    } else {
      apiCall();
    }
  };

  return (
  <div className="mainBody">
    <br /><br />
    <div className="container">
      <Container maxWidth="md">
        {successMessage && "Submitted"}
        {errorMessage && "Error..!"}
        <div className="heading">
          <h1>{REGISTER.USER_REG}</h1>
        </div>
        <div className="formContainer">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={SPACING.s6}>
              <Grid item xs={SPACING.s6}>
                <TextField
                  id="firstName"
                  label={REGISTER.FIRST_NAME}
                  variant="standard"
                  fullWidth="true"
                  name="firstName"
                  value={firstName}
                  onChange={handleInputs}
                />
              </Grid>
              <Grid item xs={SPACING.s6}>
                <TextField
                  id="lastName"
                  label={REGISTER.LAST_NAME}
                  variant="standard"
                  fullWidth="true"
                  name="lastName"
                  value={lastName}
                  onChange={handleInputs}
                />
              </Grid>
              <Grid item xs={SPACING.s6}>
                <FormControl>
                  <FormLabel id="gender">Gender</FormLabel>
                  <RadioGroup row value={gender} onChange={handleGender}>
                    <FormControlLabel
                      control={<Radio />}
                      label="Male"
                      value="male"
                    />
                    <FormControlLabel
                      control={<Radio />}
                      label="Female"
                      value="female"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={SPACING.s6}>
                <TextField
                  id="email"
                  label={REGISTER.EMAIL}
                  variant="standard"
                  fullWidth="true"
                  name="email"
                  value={email}
                  onChange={handleInputs}
                />
              </Grid>
              <Grid item xs={SPACING.s6}>
                <TextField
                  type="password"
                  id="setPassword"
                  label={REGISTER.SET_PASSWORD}
                  variant="standard"
                  fullWidth="true"
                  name="setPassword"
                  value={setPassword}
                  onChange={handleInputs}
                />
              </Grid>
              <Grid item xs={SPACING.s6}>
                <TextField
                  type="password"
                  id="confirmPassword"
                  label={REGISTER.CONFIRM_PASSWORD}
                  variant="standard"
                  fullWidth="true"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleInputs}
                />
              </Grid>
              <Grid item xs={SPACING.s12}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth="true"
                  onClick={formSubmit}
                >
                  {REGISTER.REGISTER}
                </Button>
              </Grid>
              <Grid item xs={SPACING.s12}>
                <Link to="/UserLogin"  className="loginLink">
                  {REGISTER.ALREADY_ACCOUNT}
                </Link>
              </Grid>
            </Grid>
            <br />
          </Box>
        </div>
      </Container>
    </div>
    </div>
  );
};

export default UserRegister;
