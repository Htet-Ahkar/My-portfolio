import { ButtonBase, Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Projects = ({ data }) => {
  console.log(data);
  const classes = useStyles();

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

  return (
    <div className={classes.root}>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        className={classes.container}
      >
        {data.map((image) => (
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
                onMouseEnter={isHover}
                onMouseLeave={isHoverDone}
                className={classes.image}
              >
                <img className={classes.img} alt={image.name} src={image.url} />
              </ButtonBase>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
