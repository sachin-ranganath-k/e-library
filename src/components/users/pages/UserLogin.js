import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Container,
  TextField,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { SPACING } from "../../../constants/styleGuide";
import { LOGIN, REGISTER, TOASTER } from "../../../constants/constants";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../scss/UserRegister.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserDetails,
  getUsers,
  showUserError,
} from "../../../redux/users/userAction";

const UserLogin = () => {
  const userData = useSelector((state) => state.userReducer.loadAllUsers);
  const error = useSelector((state) => state.userReducer.showError);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let userInfo = "";

  useEffect(() => {
    apiCall();
  }, []);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

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
      // .get("http://localhost/api/user")
      .then((response) => {
        dispatch(getUsers(response.data));
        console.log(response);
      })
      .catch((error) => {
        dispatch(showUserError(true));
      });
  };

  const login = () => {
    let found;
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].email === email && userData[i].setPassword === password) {
        found = 1;
        userInfo = JSON.stringify(userData[i]);
        break;
      }
    }

    if (found === 1) {
      dispatch(getUserDetails(email));
      // navigate("/userDashboard", { state: { emails: email } });
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userInfo", userInfo);
      navigate("/userDashboard");
    } else {
      dispatch(showUserError(true));
    }
  };

  return (
    <div className="container" style={{ marginTop: "10%" }}>
      <br />
      <Container maxWidth="md">
        {error && (
          <Alert severity="error">
            <AlertTitle>
              <strong>Error..!</strong>
            </AlertTitle>
            Error Occoured..! Please try later
          </Alert>
        )}
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
