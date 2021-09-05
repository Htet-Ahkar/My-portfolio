import React, { useState } from "react";
import { Button, IconButton, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

const Skills = ({ data }) => {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(data.years.length - 1);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Button
          aria-label="open"
          onClick={() => {
            setActive(!active);
          }}
          className={classes.button}
        >
          {active && (
            <img
              src="/assets/Close.gif"
              width="100%"
              height="100%"
              alt="close"
            />
          )}
        </Button>
        {active && (
          <div className={classes.yearSelector}>
            <IconButton
              aria-label="decrease"
              onClick={() => {
                index > 0 && setIndex(index - 1);
              }}
            >
              <ChevronLeft />
            </IconButton>
            <Typography>{data.years[index].year}</Typography>
            <IconButton
              aria-label="increase"
              onClick={() => {
                index < data.years.length - 1 && setIndex(index + 1);
              }}
            >
              <ChevronRight />
            </IconButton>
          </div>
        )}
        {active && (
          <div className={classes.journeyContainer}>
            <Typography className={classes.journey}>
              {data.years[index].skills}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
