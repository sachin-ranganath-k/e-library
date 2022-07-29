import React from "react";
import { makeStyles } from "@mui/styles";

// Constants
import {
  DUMMY_PROJECT,
  PROJECT_DESC
} from "../constants/constants";

// Style Guide
import { SPACING } from "../constants/styleGuide";

// Colors
import { RED } from "../constants/colors";

// MUI Icons
import Home from "@mui/icons-material/Home";

// MUI Components
import {
  Typography
} from "@mui/material";

// MUI Styles
const useStyles = makeStyles({
  projectTitle: {
    color: RED
  },
  projectDesc: {
    fontSize: SPACING.s18
  }
});

const DummyComponent = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.projectTitle} variant="h3"><Home /> {DUMMY_PROJECT}</Typography>
      <p className={classes.projectDesc}>{PROJECT_DESC}</p>
    </>
  );
};

export default DummyComponent;