import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { isAuthenticated } from './../utils/auth.utils';
import { AuthContext } from './../contexts/auth.context';
import LogoutIcon from '@mui/icons-material/Logout';

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;
  const { signOut } = React.useContext(AuthContext);

  return (
    <React.Fragment>
      <Toolbar className='header' sx={{ mb:5, borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
        <Link className='header__title' to="/">{title}</Link>
        </Typography>
        { isAuthenticated() 
          ?
          <>
            <Link className='header__link' to="/dashboard">
                Dashboard
            </Link>
            <LogoutIcon sx={{ml:2}} onClick={()=>signOut?.()}></LogoutIcon>
          </>
          : 
          <Link to="/login">
            <Button variant="outlined" size="small">
              Sign In
            </Button>
          </Link>
        }
      </Toolbar>
    </React.Fragment>
  );
}