import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import iconHamburger from 'public/images/icon-hamburger.svg'
import iconClose from 'public/images/icon-close.svg'
import logo from 'public/images/logo.svg'

const drawerHeight = 110;
const navItems = ['home', 'shop', 'about', 'contact'];

const DrawerAppBar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ height:'100%', display:'flex', alignItems:'center', justifyContent:'flex-start', paddingLeft:'1.5em' }}>
        <Image src={iconClose} alt={'Close Menu Icon'}/>
        <List sx={{ display:'flex', marginLeft:'auto' }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    return (
    <Box sx={{ display: 'flex', position: 'absolute', height: drawerHeight }}>
      <CssBaseline />
      <AppBar position="sticky" color="transparent" elevation={0} component="nav" sx={{ paddingLeft: { md: '2.5em' } }}>
        <Toolbar sx={{ width: { xs: '100vw', md:'auto'}, height: { xs: drawerHeight, md: '17.5vh' }, paddingInline: { xs: '18px'} }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' }, position: "absolute",transform: 'translateX(10px)' }}
          >
            {(mobileOpen === false) ?
            <Image src={iconHamburger} alt={'Hamburger Menu Icon'}/> :
            <Image src={iconClose} alt={'Close Menu Icon'}/>
            }
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: { md: 5 },
              display: 'flex',
              justifyContent: { xs: 'center', md: 'start' },
              flexGrow: { xs: '1', md: '0' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <Image src={logo} alt={'logo'} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((page) => (
              <Button
                key={page}
                sx={{ 
                  my: 6.2,
                  px: 1.9,
                  color: 'white', 
                  display: 'block', 
                  textTransform: 'lowercase', 
                  fontSize: '0.913rem',
                  fontFamily: 'League Spartan, sans-serif',
                  '&:after': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    bottom: 0,
                    left: '35%',
                    marginInline:'35%',
                    height: '2px',
                    width: '0%',
                    background: 'transparent',
                    transition: 'width .5s ease,backgroundColor •5s ease, right .5s ease'
                  },
                  '&:hover:after': {
                    width: '30%',
                    left: 0,
                    background: 'var(--White)'
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="top"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', height: drawerHeight },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;