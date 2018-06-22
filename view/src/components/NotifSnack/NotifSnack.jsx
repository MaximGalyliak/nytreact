import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";

const CloseIcon = props => {
  return (
    <SvgIcon {...props}>
      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </SvgIcon>
  );
};

const NotifSnack = props => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={props.open}
      autoHideDuration={3000}
      onClose={props.close}
      message={
        props.success ? "Article saved." : "Error: something went wrong:("
      }
      action={
        <IconButton color="secondary" onClick={props.closeSnack}>
          <CloseIcon />
        </IconButton>
      }
    />
  );
};

export default NotifSnack;
