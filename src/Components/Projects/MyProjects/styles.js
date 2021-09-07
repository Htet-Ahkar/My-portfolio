import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    position: "absolute",
    marginTop: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 680px)": {
      width: 300,
      marginTop: 80,
    },
  },
  container: {
    height: `100%`,
    margin: 0,
    zIndex: 1500,
  },
  items: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 500,
    backgroundColor: "rgba(130, 133, 115, 0.2)",
    "@media (max-width: 1048px)": {
      height: 325,
      width: 350,
      top: `48%`,
    },
  },
  item1: {
    "@media (max-width: 505px)": {
      height: 200,
      position: "relative",
      top: "-234%",
    },
  },
  item2: {
    "@media (max-width: 505px)": {
      height: 450,
      position: "relative",
    },
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
  itemsPaper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: `90%`,
    width: `90%`,
    backgroundColor: "rgb(252, 252, 252, 0.9)",
  },
  technologies: {
    padding: 20,
  },
}));
