import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import useStyles from "./styles";
import { links } from "./menu";

export default function Navbar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky" className={classes.appBar} color="inherit">
        <Toolbar>
          <div className={classes.grow} />
          <Button href="#home" className={classes.icon} variant="outlined">
            <Typography variant="h5" className={classes.title} color="inherit">
              X
            </Typography>
          </Button>
          <div className={classes.grow1} />
          <div className={classes.buttons}>
            {links.map((link) => (
              <Button
                href={link.url}
                key={link.id}
                className={classes.button}
                variant="outlined"
              >
                {link.text}
              </Button>
            ))}
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </>
  );
}
