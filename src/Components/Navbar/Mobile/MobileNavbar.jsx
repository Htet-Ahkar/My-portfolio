import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { MenuOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import useStyles from "./styles";

const MobileNavbar = ({ offset, buttons }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      color="inherit"
      position="sticky"
      className={`${classes.appBar} ${offset > 700 && classes.active}`}
    >
      <Toolbar>
        <Button href="#home" className={classes.icon} color="inherit">
          <Typography variant="h5" color="inherit">
            X
          </Typography>
        </Button>
        <Typography variant="h6" className={classes.title}>
          {buttons.map((link) => {
            if (offset > link.min && offset < link.max) {
              return link.text;
            } else {
              return null;
            }
          })}
        </Typography>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          aria-haspopup="true"
          aria-controls="lock-menu"
          onClick={handleClickListItem}
        >
          <MenuOutlined fontSize="large" />
        </IconButton>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {buttons.map((link) => (
            <MenuItem
              color="inherit"
              component="a"
              href={link.url}
              key={link.id}
              disabled={offset > link.min && offset < link.max && true}
              onClick={() => handleClose()}
            >
              <Typography variant="subtitle1" color="inherit">
                {link.text}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MobileNavbar;
