import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const style = {
  TextField: {
    margin: "dense",
  },
  Button: {
    marginTop: "0.5em",
  },
  Paper: {
    padding: "1em",
    position: "fixed",
  },
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      topic: "",
      start_date: "",
      end_date: "",
    };
  }

  handleChange = field => {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  };

  handleClick = e => {
    e.preventDefault();
    if (this.state.topic.length === 0) {
      this.setState({ error: true });
    } else {
      this.props.getArticles(
        this.state.topic,
        this.state.start_date,
        this.state.end_date
      );
      this.setState({ error: false, topic: "", start_date: "", end_date: "" });
    }
  };
  render() {
    return (
      <Paper elevation={4} style={style.Paper}>
        <Typography
          align="center"
          variant="title"
          // gutterBottom
          color={this.state.error ? "error" : "default"}
        >
          Search
        </Typography>
        <TextField
          label="Topic (required)"
          value={this.state.topic}
          error={this.state.error}
          fullWidth
          margin={style.TextField.margin}
          onChange={this.handleChange("topic")}
        />
        <TextField
          value={this.state.start_date}
          label="Start Date (optional)"
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          margin={style.TextField.margin}
          onChange={this.handleChange("start_date")}
        />
        <TextField
          disabled={this.state.start_date ? false : true}
          label="End Date (optional)"
          fullWidth
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          margin={style.TextField.margin}
          value={this.state.end_date}
          onChange={this.handleChange("end_date")}
        />
        <Button
          variant="raised"
          color="primary"
          onClick={this.handleClick}
          style={style.Button}
        >
          Search
        </Button>
      </Paper>
    );
  }
}
export default Search;
