import React, { useEffect, useState } from "react";
import { Box, Grid, Container, TextField, Button } from "@mui/material";
import { SPACING } from "../../constants/styleGuide";
import {
  LOGIN,
  REGISTER,
  ADMIN_LOGIN,
} from "../../constants/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../users/scss/UserRegister.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAdminData } from "../../redux/admin/adminAction";

const AdminLogin = () => {
  const userData = useSelector((state) => state.adminReducer.loadAdminData);

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
      .get("http://localhost:3001/admin")
      .then((response) => {
        dispatch(getAdminData(response.data));
      })
      .catch(() => {
        setErrorMessage(true);
      });
  };

  const login = () => {
    let found;
    for (let i = 0; i < userData.length; i++) {
      if (
        userData[i].adminEmail === email &&
        userData[i].adminPassword === password
      ) {
        found = 1;
        break;
      }
    }

    if (found === 1) {
      navigate("/AdminDashboard", { state: { emails: email } });
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
          <h1>{ADMIN_LOGIN.ADMIN_LOGIN}</h1>
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
            </Grid>
            <br />
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default AdminLogin;
