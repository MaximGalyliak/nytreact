import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Search from "../Search";
import Display from "../Display";
import { getArticles, getArticlesByYear } from "../../utilz/Axios";
import normalizer from "../../utilz/normalizer";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Theme from "../Theme";

class HomePage extends Component {
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
          var norm = normalizer(res);
          this.setState({ articles: norm });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      return getArticles(title)
        .then(res => {
          var norm = normalizer(res);
          this.setState({ articles: norm });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <MuiThemeProvider theme={Theme}>
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
            <Display articles={this.state.articles} save={true} />
          </Grid>
          <Grid item md={2}>
            <Search getArticles={this._getArticles} />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default HomePage;
