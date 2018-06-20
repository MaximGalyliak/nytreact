import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      default: "#fff",
    },
    primary: {
      main: "#00acc1",
      light: "#5ddef4",
      dark: "#007c91",
    },
    secondary: {
      main: "#424242",
      light: "#6d6d6d",
      dark: "#1b1b1b",
    },
  },
  typography: {
    fontFamily: "Open Sans Condensed, sans-serif",
    fontSize: 20,
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: "rgb(0,0,0)",
      },
    },
  },
});
export default Theme;
