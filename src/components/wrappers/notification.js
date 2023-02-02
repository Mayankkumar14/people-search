import React from "react";
import MuiAlert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";

import Snackbar from "@mui/material/Snackbar";
import { hideMessage } from "../../redux/reducers/notification";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = () => {
  const { open, message, error } = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideMessage());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      onClose={handleClose}
      autoHideDuration={3000}
      key="custom-notitifcation"
    >
      <Alert
        onClose={handleClose}
        severity={error ? "error" : "success"}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
