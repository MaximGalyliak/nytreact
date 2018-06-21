import React, { Component } from "react";
import Display from "../Display";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Theme from "../Theme";
import { getSavedArticles, deleteSavedArticle } from "../../utilz/Axios";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

class SavedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    getSavedArticles()
      .then(res => {
        this.setState({ articles: res.data });
      })
      .catch(err => console.log(err));
  }

  _deleteArticle = id => {
    deleteSavedArticle(id).then(() => {
      getSavedArticles().then(res => {
        this.setState({ articles: res.data });
      });
    });
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
            {this.state.articles.length === 0 ? (
              <Paper style={{ padding: "1em" }}>
                <Typography variant="display1" align="center">
                  Sorry no saved articles at this time
                </Typography>
              </Paper>
            ) : (
              <Display
                articles={this.state.articles}
                save={false}
                delete={true}
                deleteArticle={this._deleteArticle}
              />
            )}
          </Grid>
          <Grid item md={2} />
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default SavedPage;
