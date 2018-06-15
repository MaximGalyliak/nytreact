import React, { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import getArticles from "../../utilz/Axios";
import { ExpansionPanelActions } from "@material-ui/core";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    getArticles("trump")
      .then(res => {
        this.setState({ articles: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return this.state.articles.map(article => {
      return (
        <ExpansionPanel key={article.headline.main}>
          <ExpansionPanelSummary>
            <Typography variant="title">{article.headline.main}</Typography>
            {article.pub_date.slice(0, 10)}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body2" align="left">
              {article.snippet}
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelActions>
            <Button variant="flat" color="primary" href={article.web_url}>
              Link
            </Button>
            <Button variant="raised" color="primary">
              Save
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      );
    });
  }
}
export default Display;
