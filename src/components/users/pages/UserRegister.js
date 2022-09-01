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
import { Link } from "react-router-dom";
import "../scss/UserRegister.scss";

const UserRegister = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    setPassword: "",
    confirmPassword: "",
    fav: [],
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setlastNameError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { firstName, lastName, gender, email, setPassword, confirmPassword } =
    inputs;

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const apiCall = () => {
    axios
      .post("http://localhost:3001/users", inputs)
      // .post("http://localhost/api/user/save", inputs)
      .then((res) => {
        console.log(res);
        setSuccessMessage(true);
        setErrorMessage(false);
      })
      .catch((err) => {
        console.log(err);
        setSuccessMessage(false);
        setErrorMessage(true);
      });
  };

  const formSubmit = () => {
    if (firstName === "") {
      setFirstNameError(true);
    } else if (lastName === "") {
      setlastNameError(true);
    } else if (gender === "") {
      setGenderError(true);
    } else if (email === "") {
      setEmailError(true);
    }
    else if(setPassword===""){
      setPasswordError(true);
    }
     else if (setPassword !== confirmPassword) {
      alert("error", TOASTER.INVALID_PASSWORD);
    } else {
      apiCall();
    }
  };

  return (
    <div className="mainBody">
      <br />
      <br />
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
                  {firstNameError && firstName.length <= 0 ? (
                    <p id="errorMsg">*First name is required</p>
                  ) : (
                    ""
                  )}
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
                   {lastNameError && lastName.length <= 0 ? (
                    <p id="errorMsg">*Last name is required</p>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={SPACING.s6}>
                  <FormControl>
                    <FormLabel id="gender">Gender</FormLabel>
                    <RadioGroup row>
                      <FormControlLabel
                        control={<Radio />}
                        label="Male"
                        name="gender"
                        value="Male"
                        onChange={handleInputs}
                        checked={gender === "Male"}
                      />
                      <FormControlLabel
                        control={<Radio />}
                        label="Female"
                        name="gender"
                        value="Female"
                        onChange={handleInputs}
                        checked={gender === "Female"}
                      />
                    </RadioGroup>
                    {genderError && gender.length <= 0 ? (
                    <p id="errorMsg">*Select Gender</p>
                  ) : (
                    ""
                  )}
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
                   {emailError && email.length <= 0 ? (
                    <p id="errorMsg">*Email is required</p>
                  ) : (
                    ""
                  )}
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
                   {passwordError && setPassword.length <= 0 ? (
                    <p id="errorMsg">*Password is required</p>
                  ) : (
                    ""
                  )}
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
                  <Link to="/" className="loginLink">
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
