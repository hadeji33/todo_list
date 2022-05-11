import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";

import styles from "./styles.module.css";

export const LoginForm: React.FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(login, password);

    setLogin("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      <h1 className={styles.title}>Please Login</h1>
      <FormGroup className={styles.formGroup}>
        <TextField
          required
          id="login"
          label="Login"
          variant="outlined"
          onChange={handleLoginChange}
          value={login}
        />

        <TextField
          required
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          onChange={handlePasswordChange}
          value={password}
          sx={{
            mt: 2,
          }}
        />

        <Button
          type="submit"
          variant="outlined"
          sx={{
            mt: 2,
          }}
        >
          Login
        </Button>
      </FormGroup>
    </form>
  );
};
