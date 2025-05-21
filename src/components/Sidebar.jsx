import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { AppBar, Box, Drawer, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import { toggleThemeMode } from '../features/theme/themeSlice';
import ListItemLink from './ListItemLink';
import menu from '../menu';

const Sidebar = () => {

   const [open, setOpen] = useState(false);
   const {title} = useSelector((store) => store.toolbar);
   const dispatch = useDispatch();
   const theme = useTheme();

   const toggleMenu = () => {
      setOpen(!open);
   };  
   
   const toggleTheme = () => {
      dispatch(toggleThemeMode());
   };

   return (
      <Box>
         <AppBar enableColorOnDark>
            <Toolbar>
               <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr:1}} onClick={toggleMenu}>
                  <MenuIcon/>
               </IconButton>
               <Box sx={{ flex:"1 1 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant="h6" component="div">{title}</Typography>
                  <IconButton color="inherit" onClick={toggleTheme}>
                     {theme.palette.mode === "dark" ? <Brightness7  /> : <Brightness4  />}
                  </IconButton>
               </Box>
            </Toolbar>
         </AppBar>
         <Drawer anchor="left" open={open} onClick={toggleMenu}>
            <Box sx={{ width: 200 }}>
               <List>
                  {menu.map((item, index)=>(
                     <ListItem disablePadding key={index}>
                        <ListItemLink to={item.to} primary={item.primary} icon={item.icon} />
                     </ListItem>
                  ))}
               </List>
            </Box>
         </Drawer>
      </Box>

   );
};

export default Sidebar;