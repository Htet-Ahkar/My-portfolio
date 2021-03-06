import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    opacity: "0",
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    transform: "scaleY(0)",
  },
  active: {
    transition: "all 300ms ease-in-out 100ms",
    opacity: "0.7",
    transform: "scaleY(1)",
  },

  icon: {
    width: "50px",
    height: "50px",
    display: "flex",
    borderRadius: "30px",
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
  buttonActive: {
    backgroundColor: "#D0CECC",
  },

  //padding
  grow: {
    width: "100px",
  },
  //Between Icon and Buttons
  grow1: {
    width: "400px",
  },
}));
