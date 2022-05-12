import * as React from 'react'

import { AppDispatch } from '../../modules'

import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { userSlice } from "../../modules/users/"
import { mainRoutes } from "../../modules/browseroutes/routes";

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'

export const Header: React.FC = () => {
  const user = useAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null)
  };

  const handleLogin = () => {
    navigate(mainRoutes.login(), {replace: true})
  }

  const handleOut = () => {
    dispatch(userSlice.actions.out())
    setAnchorEl(null)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo List App
          </Typography>
          { user
            ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleOut}>Out</MenuItem>
              </Menu>
            </div>
          )
            : (
              <>  
              <MenuItem onClick={handleLogin}>Login</MenuItem>
              </>
          ) }
        </Toolbar>
      </AppBar>
    </Box>
  );
}