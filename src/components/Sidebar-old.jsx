import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { AppBar, Box, Drawer, IconButton, List, ListItem, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import { toggleThemeMode } from '../features/theme/themeSlice';
import ListItemLink from './ListItemLink';
import menu from '../menu';
import { matchPath, useLocation, useMatch } from 'react-router-dom';
import CommentBadge from './CommentBadge';
import CommentsDialog from './CommentsDialog';


import CommentIcon from '@mui/icons-material/Comment';
import { Badge } from '@mui/material';
import { openDialog } from '../features/dialog/dialogSlice';

const Sidebar = () => {

   const [open, setOpen] = useState(false);
   const {title} = useSelector((store) => store.toolbar);
   const {items, isLoading, error} = useSelector((store) => store.comments);
   const dispatch = useDispatch();
   const theme = useTheme();
   const buttonRef = useRef(null);

   // const matchPostPage = useMatch("/post/:id");
   const matchPostPage = /^\/posts\/\d+$/.test(location.pathname);

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
               <Box sx={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant="h6" component="div">{title}</Typography>

                  <Stack direction="row">
                     <IconButton color="inherit" onClick={toggleTheme}>
                        {theme.palette.mode === "dark" ? <Brightness7  /> : <Brightness4  />}
                     </IconButton>
                     {/* {matchPostPage ? <CommentBadge buttonRef={buttonRef}/> : null} */}


                     {matchPostPage ? 
                        <IconButton ref={buttonRef} color="inherit" aria-label="post comments" onClick={() => dispatch(openDialog())}>
                           <Badge color="error" badgeContent={items.length || 0} showZero >
                              <CommentIcon />
                           </Badge>
                        </IconButton>
                     : null }


                  </Stack>
               </Box>
            </Toolbar>
         </AppBar>



         {/* <CommentsDialog buttonRef={buttonRef}/> */}




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