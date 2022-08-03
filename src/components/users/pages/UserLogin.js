import React, { useEffect, useState } from "react";
import { Box, Grid, Container, TextField, Button } from "@mui/material";
import { SPACING } from "../../../constants/styleGuide";
import { LOGIN, REGISTER, TOASTER } from "../../../constants/constants";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../scss/UserRegister.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/users/userAction";

const UserLogin = () => {
  const userData = useSelector((state) => state.userReducer.loadAllUsers);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    apiCall();
  }, []);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { email, password } = inputs;

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const apiCall = () => {
    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        dispatch(getUsers(response.data));
      })
      .catch(() => {
        setErrorMessage(true);
      });
  };

  const login = () => {
    let found;
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].email === email && userData[i].setPassword === password) {
        found = 1;
        break;
      }
    }

    if (found === 1) {
      navigate("/userDashboard", { state: { emails: email } });
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <div className="container" style={{ marginTop: "10%" }}>
      <br />
      <Container maxWidth="md">
        {errorMessage && "Invalid Credentials..!"}
        <div className="heading">
          <h1>{LOGIN.USER_LOGIN}</h1>
        </div>
        <div className="formContainer">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={SPACING.s6}>
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
                  label={LOGIN.PASSWORD}
                  variant="standard"
                  fullWidth="true"
                  name="password"
                  value={password}
                  onChange={handleInputs}
                />
              </Grid>

              <Grid item xs={SPACING.s12}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth="true"
                  onClick={login}
                >
                  {LOGIN.LOGIN}
                </Button>
              </Grid>
              <Grid item xs={SPACING.s12}>
                <Link
                  to="/UserRegister"
                  underline="hover"
                  className="loginLink"
                >
                  {LOGIN.DONT_HAVE_ACCOUNT}
                </Link>
              </Grid>
            </Grid>
            <br />
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default UserLogin;
