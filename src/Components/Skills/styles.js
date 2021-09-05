import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    backgroundColor: "hsl(16, 5%, 46%)",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/Skill-page.jpg"
    })`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "90%",
    width: 550,
    margin: "0 10px",
    marginTop: 60,
  },
  button: {
    height: 40,
    width: 125,
    borderRadius: 20,
    backgroundColor: "rgb(185, 173, 165, 0.5)",
    position: "relative",
    top: `29%`,
    left: `34%`,
    "@media (max-width: 400px)": {
      top: `calc(29% + 61px)`,
      left: ` calc(34% - 30px)`,
    },
  },
  yearSelector: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "rgb(185, 173, 165, 0.5)",
    height: 40,
    width: 125,
    borderRadius: 25,
    position: "relative",
    top: `22.75%`,
    left: `60%`,
    overflow: "hidden",
    "@media (max-width: 400px)": {
      width: 175,
      height: 50,
      top: `5%`,
      left: `25%`,
    },
  },
  journeyContainer: {
    width: 350,
    height: 200,
    position: "relative",
    top: `41%`,
    left: `23%`,
    borderRadius: 30,
    backgroundColor: "rgb(185, 173, 165, 0.5)",
    overflow: "hidden",
    "@media (max-width: 400px)": {
      width: 300,
      height: 200,
      top: `40%`,
      left: `9%`,
    },
  },
  journey: {
    padding: "20px",
  },
}));
