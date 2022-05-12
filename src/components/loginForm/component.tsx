import React, { useEffect, useState } from "react"

import { useDispatch } from "react-redux"
import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

import { mainRoutes } from "../../modules/browseroutes/routes"
import { authentificate } from "../../modules/users/effects/authentificate"
import { AppDispatch } from "../../modules"


import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import FormGroup from "@mui/material/FormGroup"

import styles from "./styles.module.css"

export const LoginForm: React.FC = () => {
  const [login, setLogin] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const dispatch = useDispatch<AppDispatch>()
  const location = useLocation()
  const navigate = useNavigate()
  const user = useAuth()

  useEffect(() => {
    if(user) {
      navigate(mainRoutes.main(), { state : {from: location}, replace: true})
    }
  }, [user, navigate, location]) 

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value)
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      dispatch(authentificate(login, password))      
      setLogin("")
      setPassword("")
    } catch (e){
      console.log(e)
    }
    
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
