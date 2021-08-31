import { Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const AboutUs = ({ data }) => {
  const classes = useStyles();
  console.log(data);
  return (
    <div className={classes.wraper}>
      <Container>
        <Typography align="center" className={classes.text} variant="h3">
          {data.name}.
        </Typography>
      </Container>
    </div>
  );
};

export default AboutUs;
