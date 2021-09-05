import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { IconButton } from "@material-ui/core";
import { Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons";

const AboutUs = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container className={classes.container}>
          <Grid item>
            <div className={classes.image}>
              <img
                alt="profileImage"
                src={process.env.PUBLIC_URL + "/assets/htetAhkar.jpg"}
                className={classes.image}
              />
            </div>
          </Grid>
          <Grid item className={classes.textContainer}>
            <Typography className={classes.text} gutterBottom variant="h6">
              I am {data.name}
            </Typography>
            <Typography className={classes.text} gutterBottom variant="h6">
              {data.location}
            </Typography>
            <Typography className={classes.text} gutterBottom variant="h6">
              {data.description}
            </Typography>
            <Typography className={classes.text} gutterBottom variant="h6">
              Interested in {data.interest}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <div className={classes.socialMedia}>
        <Typography gutterBottom variant="subtitle1">
          Social Media
        </Typography>
        <div>
          <IconButton
            aria-label="GitHub"
            color="inherit"
            href="https://github.com/Htet-Ahkar"
            target="_blank"
          >
            <GitHub />
          </IconButton>
          <IconButton
            aria-label="Facebook"
            color="inherit"
            href=""
            target="_blank"
          >
            <Facebook />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            color="inherit"
            href=""
            target="_blank"
          >
            <Instagram />
          </IconButton>
          <IconButton
            aria-label="LinkedIn"
            color="inherit"
            href=""
            target="_blank"
          >
            <LinkedIn />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
