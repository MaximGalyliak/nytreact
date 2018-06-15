import React, { Component } from "react";
import MenuBar from "./components/MenuBar";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Theme from "./components/Theme";
import Grid from "@material-ui/core/Grid";
import Search from "./components/Search";
import Display from "./components/Display";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//TODO implement rounting
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <MenuBar />
        <Grid
          container
          spacing={24}
          style={{
            margin: 0,
            width: "100%",
          }}
        >
          <Grid item md={10}>
            <Display />
          </Grid>
          <Grid item md={2}>
            <Search />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
