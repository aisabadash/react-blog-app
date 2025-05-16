import { Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import { setToolbarTitle } from "../features/toolbar/toolbarSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListIcon from '@mui/icons-material/List';

const Home = () => {
   const dispatch = useDispatch();

   useEffect(()=>{
      dispatch(setToolbarTitle("DOiT MVP"));
   },[]);

   return (
      <Container>
         <Toolbar/>
         <Box>
            <Typography variant="h4" gutterBottom>Wellcome to DOiT MVP</Typography>
            <Typography variant="subtitle1" gutterBottom>We are working on the MVP of an educational platform. Join the team!</Typography>
            <Stack direction="row" spacing={2}>
               <Button variant="contained" startIcon={<ListIcon />}>View posts</Button>
               <Button variant="outlined" startIcon={<AddCircleIcon />}>Add post</Button>
            </Stack>
         </Box>
      </Container>
   );
};

export default Home;