import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/Hero-Background.jpg";

export default makeStyles((theme) => ({
  wraper: {
    backgroundImage: `url(${Image})`,
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  text: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "100px",
    width: "80%",
    height: "100%",
  },
}));
