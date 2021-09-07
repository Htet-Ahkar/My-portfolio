import {
  Backdrop,
  ButtonBase,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import useStyles from "./styles";
import Turorials from "./Tutorials/Turorials";
import MyProjects from "./MyProjects/MyProjects";

const Projects = ({ data }) => {
  const classes = useStyles();
  const [id, setId] = useState();
  const handleClose = () => {
    setId();
  };

  const isHover = (e) => {
    const textElement = e.target.parentNode.parentNode.parentNode.children[0];
    const imageElement = e.target.parentNode.parentNode;
    imageElement.classList.add(`${classes.avtivePaper}`);
    textElement.classList.add(`${classes.activeHeader}`);
  };
  const isHoverDone = (e) => {
    const textElement = e.target.parentNode.parentNode.parentNode.children[0];
    const imageElement = e.target.parentNode.parentNode;
    imageElement.classList.remove(`${classes.avtivePaper}`);
    textElement.classList.remove(`${classes.activeHeader}`);
  };

  if (id) {
    const element = document.querySelector("#lock");
    element.classList.add(`${classes.stopScroll}`);
  } else {
    const element = document.querySelector("#lock");
    element.classList.remove(`${classes.stopScroll}`);
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        className={classes.container}
      >
        {data.images.map((image) => (
          <Grid key={image.name} item>
            <Typography
              className={classes.header}
              align="center"
              gutterBottom
              variant="h6"
            >
              {image.name}
            </Typography>
            <Paper className={classes.paper}>
              <ButtonBase
                onClick={(e) => {
                  const id = parseInt(e.target.id);
                  setId(id);
                }}
                onMouseEnter={isHover}
                onMouseLeave={isHoverDone}
                className={classes.image}
              >
                <img
                  id={image.id}
                  className={classes.img}
                  alt={image.name}
                  src={image.url}
                />
              </ButtonBase>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Backdrop
        className={`${classes.backDrop} ${id === 1 && classes.backDropLeft} ${
          id === 2 && classes.backDropRight
        }`}
        open={id ? true : false}
        onClick={handleClose}
      />
      {id === 1 && <Turorials data={data.tutorials} />}
      {id === 2 && <MyProjects data={data.myProjects} />}
    </div>
  );
};

export default Projects;
