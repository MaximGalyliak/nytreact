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
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      topic: "",
      start_year: "",
      end_year: "",
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
      this.setState({ error: false, topic: "", start_year: "", end_year: "" });
      //call server to talk to api
    }
  };
  render() {
    return (
      <Paper elevation={10} style={{ padding: "1em" }}>
        <Typography
          align="center"
          variant="title"
          gutterBottom
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
          value={this.state.startYear}
          label="Start Year (optional)"
          type="number"
          fullWidth
          margin={style.TextField.margin}
          onChange={this.handleChange("start_year")}
        />
        <TextField
          label="End Year (optional)"
          fullWidth
          type="number"
          margin={style.TextField.margin}
          value={this.state.endYear}
          onChange={this.handleChange("end_year")}
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
