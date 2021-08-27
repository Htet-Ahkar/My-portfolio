import { Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.wraper}>
      <Container align="center" className={classes.text} variant="h3">
        <Typography>This is About us Page.</Typography>
      </Container>
    </div>
  );
};

export default AboutUs;
