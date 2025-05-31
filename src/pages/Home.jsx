import { Button, Container, Paper, Stack, Toolbar, Typography } from "@mui/material";
import { setToolbarTitle } from "../store/features/toolbar/toolbarSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListIcon from '@mui/icons-material/List';
import { useNavigate } from "react-router-dom";

const Home = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   useEffect(() => {
      dispatch(setToolbarTitle("Blog App"));
   }, []);

   return (
      <Container sx={{
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         height: "100vh"
      }}>
         <Toolbar />
         <Paper elevation={0} sx={{
            p: 2,
            my: 4,
            background: 'linear-gradient(135deg,rgba(33, 148, 243, 0.2) 0%,rgba(244, 48, 192, 0.2) 100%)',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
         }}>
            <Typography variant="h4" gutterBottom>Wellcome to Blog App</Typography>
            <Typography variant="subtitle1" gutterBottom>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, aspernatur sunt dolores temporibus ex veritatis dolorem explicabo magnam quod, nihil assumenda eligendi doloremque quo autem eius exercitationem quia facilis laudantium.</Typography>
            <Stack direction="row" spacing={2}>
               <Button variant="contained" startIcon={<ListIcon />} onClick={() => navigate("/posts")}>View posts</Button>
               <Button variant="outlined" startIcon={<AddCircleIcon />} onClick={() => navigate("/posts/create")}>Add post</Button>
            </Stack>
         </Paper>
      </Container>
   );
};

export default Home;