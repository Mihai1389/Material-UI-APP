import React from "react";
import Button from "@mui/material/Button";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import useStyles from "./styles";

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary">
              Hello Everyone this is a photo album and i'm traing to make that
              sentes as long os possible so we can see how does it look like on
              the screen
            </Typography>
          </Container>
        </div>
        <div className={classes.button}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary">
                See my photo
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Secondary action
              </Button>
            </Grid>
          </Grid>
        </div>
        <div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              <Card classes={classes.card}>
                <CardMedia></CardMedia>
              </Card>
            </Grid>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
