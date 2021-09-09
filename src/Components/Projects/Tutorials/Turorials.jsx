import {
  Button,
  ButtonBase,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import {
  ArrowDropUpRounded,
  ArrowDropDownRounded,
  YouTube,
  GitHub,
} from "@material-ui/icons";
import React, { useState } from "react";
import useStyles from "./styles";

const Turorials = ({ data }) => {
  const [index, setIndex] = useState(data.length - 1);
  const classes = useStyles();

  const handleIncrease = () => {
    index < data.length - 1 ? setIndex(index + 1) : setIndex(0);
  };
  const handleDecrease = () => {
    index > 0 ? setIndex(index - 1) : setIndex(data.length - 1);
  };
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        className={classes.container}
      >
        <Grid item>
          <Paper elevation={3} className={`${classes.items} ${classes.item1}`}>
            <ButtonBase
              href={data[index].URL}
              target="_blank"
              className={classes.image}
            >
              <img
                className={classes.img}
                src={data[index].image}
                alt={data[index].title}
              />
            </ButtonBase>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={3} className={`${classes.items} ${classes.item2}`}>
            <Paper elevation={0} className={classes.itemsPaper}>
              <Button onClick={handleIncrease} fullWidth>
                <ArrowDropUpRounded fontSize="large" />
              </Button>
              <Typography gutterBottom variant="h5">
                {data[index].title}
              </Typography>
              <div className={classes.technologies}>
                <Typography align="center" gutterBottom variant="h6">
                  Technologies
                </Typography>
                <Typography align="center" gutterBottom variant="subtitle1">
                  {data[index].technology}
                </Typography>
              </div>
              <div className={classes.icons}>
                <IconButton
                  aria-label="Youtube"
                  color="inherit"
                  href={data[index].youtube}
                  target="_blank"
                >
                  <YouTube fontSize="large" />
                </IconButton>
                <IconButton
                  aria-label="Githublink"
                  color="inherit"
                  href={data[index].github}
                  target="_blank"
                >
                  <GitHub fontSize="large" />
                </IconButton>
              </div>
              <Button onClick={handleDecrease} fullWidth>
                <ArrowDropDownRounded fontSize="large" />
              </Button>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Turorials;
