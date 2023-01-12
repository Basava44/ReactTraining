import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import "./LoginForm.css";

const LoginForm = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
  });

  const [helperText, setHelperText] = useState("");

  const submit = (event) => {
    event.preventDefault();
    console.log(formDetails);
    setFormDetails({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkbox: false,
    });
  };

  const nameHandler = (event) => {
    setFormDetails({
      ...formDetails,
      name: event.target.value,
    });
  };

  const emailHandler = (event) => {
    setFormDetails({
      ...formDetails,
      email: event.target.value,
    });
  };

  const passwordHandler = (event) => {
    setFormDetails({
      ...formDetails,
      password: event.target.value,
    });
  };

  const confirmPasswordHandler = (event) => {
    if (formDetails.password !== formDetails.confirmPassword) {
      setHelperText("Password is not matching");
    } else {
      setHelperText("");
    }
    setFormDetails({
      ...formDetails,
      confirmPassword: event.target.value,
    });
  };

  const checkBoxHandler = (event) => {
    setFormDetails({
      ...formDetails,
      checkbox: event.target.checked,
    });
  };

  return (
    <form className="form" onSubmit={submit} autoComplete="false">
      <TextField
        label="Name"
        variant="outlined"
        margin="normal"
        fullWidth
        type="text"
        aria-label="Name"
        value={formDetails.name}
        onChange={nameHandler}
      />

      <TextField
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
        type="email"
        aria-label="Email"
        value={formDetails.email}
        onChange={emailHandler}
      />

      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        fullWidth
        type="password"
        aria-label="Password"
        value={formDetails.password}
        onChange={passwordHandler}
        inputProps={{ minLength: 8 }}
      />

      <TextField
        label="Confirm Password"
        variant="outlined"
        margin="normal"
        fullWidth
        type="password"
        value={formDetails.confirmPassword}
        onChange={confirmPasswordHandler}
        error={
          formDetails.password !== formDetails.confirmPassword &&
          helperText !== ""
        }
      />

      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            size="small"
            checked={formDetails.checkbox}
            onChange={checkBoxHandler}
          />
        }
        label="I agree the Terms and Conditions"
      />
      <Button
        variant="contained"
        type="sumbit"
        fullWidth
        disabled={
          formDetails.password !== formDetails.confirmPassword ||
          !formDetails.checkbox
        }
      >
        Sign up
      </Button>
      <div className="signIn">
        Already have an account? <span className="signInButton">Sign In</span>
      </div>
    </form>
  );
};

export default LoginForm;
