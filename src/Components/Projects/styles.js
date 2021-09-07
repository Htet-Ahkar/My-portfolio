import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: `100vw`,
    height: ` 100vh`,
    background: `#A4B6C0`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexGrow: "1",
    margin: 0,
    "@media (max-width: 1048px)": {
      position: "relative",
      top: 25,
    },
    "@media (max-width: 505px)": {
      position: "relative",
      top: 0,
    },
  },
  paper: {
    boxShadow: `10px 10px 8px #8f9ca3`,
    height: 500,
    width: 400,
    backgroundColor: "white",
    transition: "all 300ms ease-in-out 100ms",
    "@media (max-width: 1048px)": {
      height: 320,
      width: 256,
    },
  },
  avtivePaper: {
    opacity: "0.3",
    transform: `scale(1.05)`,
  },
  image: {
    width: `100%`,
    height: `100%`,
  },
  img: {
    borderRadius: 5,
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  header: {
    position: "relative",
    top: 32,
    opacity: "0",
    transform: "scale(0)",
    transition: "all 300ms ease-in-out 100ms",
  },
  activeHeader: {
    top: -10,
    opacity: "1",
    transform: "scale(1)",
  },
  backDrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: `rgb(164, 182, 192)`,
  },
  backDropLeft: {
    backgroundColor: `rgb(164, 182, 192)`,
  },
  backDropRight: {
    backgroundColor: `rgb(242, 171, 45)`,
  },
  //for backDrop
  stopScroll: {
    height: `100%`,
    overflow: `hidden`,
  },
}));
