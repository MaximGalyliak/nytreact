import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const MenuBar = () => {
  return (
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
                onClick={this.handleClickOpen}
              >
                Saved
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default MenuBar;
