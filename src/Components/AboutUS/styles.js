import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/About-us-page-background.jpg"
    })`,
    backgroundRepeat: "no-repeat",
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
    marginTop: 100,
    marginBottom: 25,
    width: "75%",
    height: 600,
    backgroundColor: "rgba(130, 133, 115, 0.2)",
  },
  container: {
    height: "100%",
    alignContent: "center",
    justifyContent: "space-around",
  },
  image: {
    padding: "25px 0",
    width: 250,
    height: 250,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
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

  text: {
    "@media (max-width: 1048px)": {
      textAlign: "center",
    },
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
