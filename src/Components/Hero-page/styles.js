import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  wraper: {
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/Hero-Background.jpg"
    })`,
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  text: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "100px",
    width: "80%",
    height: "100%",
  },
}));
