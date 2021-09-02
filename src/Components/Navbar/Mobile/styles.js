import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    transform: "scaleY(0)",
    opacity: "0",
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  active: {
    transition: "all 300ms ease-in-out 100ms",
    opacity: "0.7",
    transform: "scaleY(1)",
  },
  title: {
    flexGrow: 1,
  },

  icon: {
    width: "50px",
    height: "50px",
    display: "flex",
    borderRadius: "20px",
    backgroundColor: "rgb(196, 195, 195, 0.3)",
    marginRight: theme.spacing(2),
  },
}));
