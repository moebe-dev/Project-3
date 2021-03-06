import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const BootstrapButton = withStyles({
  root: {
    borderRadius: "150px",
    textTransform: "none",
    fontSize: "4rem",
    padding: "20px",
    lineHeight: 1.5,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
  },
}));

export default function CustomizedButtons({ getQueryTopic }) {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <BootstrapButton
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={() => getQueryTopic("html")}
      >
        <ion-icon name="logo-html5"></ion-icon>
      </BootstrapButton>

      <BootstrapButton
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={() => getQueryTopic("css")}
      >
        <ion-icon name="logo-css3"></ion-icon>
      </BootstrapButton>
      <BootstrapButton
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={() => getQueryTopic("javascript")}
      >
        <ion-icon name="logo-javascript"></ion-icon>
      </BootstrapButton>
      <BootstrapButton
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={() => getQueryTopic("jquery")}
      >
        <i className="devicon-jquery-plain"></i>
      </BootstrapButton>

      <BootstrapButton
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={() => getQueryTopic("react")}
      >
        <ion-icon name="logo-react"></ion-icon>
      </BootstrapButton>

      <BootstrapButton
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={() => getQueryTopic("node.js")}
      >
        <ion-icon name="logo-nodejs"></ion-icon>
      </BootstrapButton>
    </div>
  );
}
