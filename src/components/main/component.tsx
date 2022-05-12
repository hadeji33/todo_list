import { FC } from 'react'
import { Header } from "../header/component"
import { Outlet } from 'react-router-dom'
import Container from "@mui/material/Container"

interface IProps {}

/**
* @author
* @function @MainLayout
**/

export const MainLayout:FC<IProps> = (props) => {
  return (
    <>
    <Header />
    <Container>
      <Outlet />
    </Container>
    
    </>
   )
 }
