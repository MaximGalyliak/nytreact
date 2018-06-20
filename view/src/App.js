import React, { Component } from "react";
import MenuBar from "./components/MenuBar";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Theme from "./components/Theme";
import Grid from "@material-ui/core/Grid";
import Search from "./components/Search";
import Display from "./components/Display";
import { getArticles, getArticlesByYear } from "./utilz/Axios";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//TODO implement rounting
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    this._getArticles("latest");
  }

  _getArticles = (title, start_date, end_date) => {
    if (start_date) {
      return getArticlesByYear(title, start_date, end_date)
        .then(res => {
          console.log(res);
          this.setState({ articles: res.data });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      return getArticles(title)
        .then(res => {
          this.setState({ articles: res.data });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

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
          <Grid item md={2} />
          <Grid item md={8}>
            {this.state.articles && <Display articles={this.state.articles} />}
          </Grid>
          <Grid item md={2}>
            <Search getArticles={this._getArticles} />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
