import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#32b7a4",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#b996ff",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    body2: {
      fontSize: "1em",
    },
    body1: {
      fontWeight: 300,
      fontSize: "1em",
    },
    h1: {
      fontWeight: 500,
      fontSize: "5em",
      fontFamily: "DM Serif Display",
    },
    h2: {
      fontWeight: 500,
      fontSize: "2em",
      fontFamily: "DM Serif Display",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.4em",
      fontFamily: "DM Serif Display",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.2em",
      fontFamily: "DM Serif Display",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1em",
      fontFamily: "DM Serif Display",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.1em",
      fontStyle: "italic"
    },
  },
});

export default theme;
