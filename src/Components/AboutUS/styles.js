import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/About-us-page-background.jpg";

export default makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Image})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  //paper
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: "50px",
    width: "75%",
    height: 450,
    backgroundColor: "rgba(130, 133, 115, 0.2)",
  },
  container: {
    height: "100%",
    alignContent: "center",
    justifyContent: "space-around",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: "50%",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  //social media
  socialMedia: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "25px",
    height: "80px",
  },
}));
