import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import useStyles from "./styles";
import { links } from "./menu";

export default function Navbar() {
  const classes = useStyles();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  console.log(offset);

  return (
    <>
      <AppBar
        position="sticky"
        className={`${classes.appBar}
        ${offset > 700 && classes.active}
        `}
        color="inherit"
      >
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
                className={`
                ${classes.button}
                ${
                  offset > link.min && offset < link.max && classes.buttonActive
                }
                `}
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
