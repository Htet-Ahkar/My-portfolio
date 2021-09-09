import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const classes = useStyles();
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  return (
    <div className={classes.root}>
      <div className={classes.image}>
        <img
          className={classes.img}
          src="/assets/newIdeas.svg"
          alt="background"
        />
      </div>
      <div className={classes.catImage}>
        <img
          className={classes.img}
          src="/assets/PlayfulCat.svg"
          alt="background"
        />
      </div>
      <Paper component="form" onSubmit={sendEmail} className={classes.paper}>
        <div className={classes.svgContainer}>
          <div className={classes.mailBox}>
            <img
              className={classes.img}
              src="/assets/Mailbox.svg"
              alt="mailBox"
            />
          </div>
          <div className={classes.relaxingWalk}>
            <img
              className={classes.img}
              src="/assets/relaxingWalk.svg"
              alt="relaxingWalk"
            />
          </div>
          <div className={classes.welcoming}>
            <img
              className={classes.img}
              src="/assets/welcoming.svg"
              alt="welcoming"
            />
          </div>
        </div>
        <Grid className={classes.container} container>
          <Grid
            item
            xs={12}
            sm={6}
            className={`${classes.items} ${classes.leftItem}`}
          >
            <TextField
              name="fullName"
              id="Name"
              label="Name"
              variant="outlined"
              required
            />
            <TextField
              name="phone"
              className={classes.numInput}
              id="Phone Number"
              label="Phone Number"
              variant="outlined"
              required
              type="number"
            />
            <TextField
              name="email"
              id="Email"
              label="Email"
              variant="outlined"
              type="email"
              required
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            className={`${classes.items} ${classes.rightItem}`}
          >
            <TextField
              name="message"
              id="Messages"
              label="Messages"
              multiline
              rows={8}
              fullWidth
              variant="filled"
            />

            <Typography gutterBottom variant="subtitle2">
              {result
                ? `Your message has been successfully sent. I will contact you soon.`
                : `May I help you?`}
            </Typography>

            <Button disableElevation type="submit" variant="contained">
              Send
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ContactUs;
