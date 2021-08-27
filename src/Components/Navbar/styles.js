import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    opacity: "0.7",
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",

    // [theme.breakpoints.up("sm")]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
  },
  icon: {
    width: "50px",
    height: "50px",
    display: "flex",
    borderRadius: "30px",
  },
  title: {
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
  buttons: {
    height: "50px",
    width: "825px",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    width: "150px",
  },

  //padding
  grow: {
    width: "100px",
  },
  //Between Icon and Buttons
  grow1: {
    width: "340px",
  },
}));
