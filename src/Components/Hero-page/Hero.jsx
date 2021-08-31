import { Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Hero = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.wraper}>
      <Container>
        <Typography align="center" className={classes.text} variant="h3">
          {data.text}
        </Typography>
      </Container>
    </div>
  );
};

export default Hero;
