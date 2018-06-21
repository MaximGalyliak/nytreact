import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Theme from "../Theme";

const MenuBar = () => {
  return (
    <MuiThemeProvider theme={Theme}>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Typography variant="display1" align="left">
                NYT
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="right">
                <Button
                  variant="flat"
                  color="secondary"
                  component={Link}
                  to={"/saved"}
                >
                  Saved
                </Button>
                <Button
                  variant="flat"
                  color="secondary"
                  component={Link}
                  to={"/"}
                >
                  Home
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
};
export default MenuBar;
