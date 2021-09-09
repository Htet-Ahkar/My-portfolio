import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: `100vw`,
    height: `100vh`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: `linear-gradient(180deg, #A4B6C0 0%, #FFFFFF 52.08%, #339FFF 100%)`,
  },
  image: {
    width: 350,
    height: 295,
  },
  img: {
    width: `100%`,
    height: `100%`,
  },
  catImage: {
    position: `relative`,
    top: `23%`,
    width: 200,
    height: 66.5,
    "@media (max-width: 600px)": {
      top: `10%`,
    },
  },
  paper: {
    width: `80%`,
    height: 500,
    background: `rgba(196, 196, 196, 0.5)`,
    position: `absolute`,
    "@media (max-width: 600px)": {
      marginTop: 80,
      width: `90%`,
      height: 650,
    },
  },
  container: {
    height: `100%`,
  },
  items: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  leftItem: {
    justifyContent: `space-evenly`,
    paddingTop: 30,
    paddingBottom: 125,
    "@media (max-width: 600px)": {
      paddingBottom: 50,
    },
  },
  rightItem: {
    padding: `0 25px`,
  },
  //svgs
  svgContainer: {
    position: `absolute`,
    display: `flex`,
    justifyContent: `space-between`,
    width: `100%`,
    top: `-14%`,
    alignItems: `flex-end`,
    height: 66.5,
    "@media (max-width: 600px)": {
      top: `-9%`,
    },
  },
  mailBox: {
    width: 50,
    height: 42.8,
  },
  relaxingWalk: {
    width: 100,
    height: 67.62,
  },
  welcoming: {
    width: 100,
    height: 61.23,
  },

  //phone number
  numInput: {
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
}));
