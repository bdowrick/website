import * as React from 'react';
import {Grid,Button,Box, AppBar, Toolbar, Typography, IconButton} from '@mui/material'
import Select from '../components/select';
import ConstructionIcon from '@mui/icons-material/Construction';
import theme from '../theme';

export default function BasicTabs() {

  return (     
    <AppBar position="fixed" sx={{height:'100%', background:'black'}}>
      <Toolbar sx={{height:'100%'}} >
        <ConstructionIcon sx={{ fontSize: 72, paddingRight:'16px' }} />
        <Typography variant="h1" sx={{fontFamily:'"Space Mono", monospace'}} align="center">
          bdowrick.net
        </Typography> 
      </Toolbar>
    </AppBar>
  );
}