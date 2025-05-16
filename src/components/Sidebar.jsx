import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';

const Sidebar = () => {

   const {title} = useSelector((store) => store.toolbar);
   const [open, setOpen] = useState(false);

   const toggleMenu = () => {
      setOpen(!open);
   };   

   return (
      <Box>
         <AppBar>
            <Toolbar>
               <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr:1}} onClick={toggleMenu}>
                  <MenuIcon/>
               </IconButton>
               <Typography variant="h6" component="div">{title}</Typography>
            </Toolbar>
         </AppBar>
         <Drawer anchor="left" open={open} onClick={toggleMenu}>
            <List>
               {[
                  {text: "Home", icon: <HomeIcon/>, link: "/"},
                  {text: "All posts", icon: <ListIcon/>, link: "/posts"},
                  {text: "New post", icon: <AddCircleIcon/>, link: "/posts/create"}
               ].map((item)=>(
                  // <Link to={item.link} style={{textDecoration: "none", color:"gray"}} key={item.text}>
                  <Link to={item.link} key={item.text}>
                     <ListItem disablePadding>
                        <ListItemButton>
                           <ListItemIcon>
                              {item.icon}
                           </ListItemIcon>                     
                           <ListItemText primary={item.text}></ListItemText>
                        </ListItemButton>
                     </ListItem>
                  </Link>
               ))}
            </List>
         </Drawer>
      </Box>

   );
};

export default Sidebar;