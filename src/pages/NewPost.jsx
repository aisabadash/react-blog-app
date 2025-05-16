import { Container, Toolbar, Typography } from "@mui/material";
import { setToolbarTitle } from "../features/toolbar/toolbarSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const NewPost = () => {
   const dispatch = useDispatch();

   useEffect(()=>{
      dispatch(setToolbarTitle("New post"));
   },[]);

   return (
      <Container>
         <Toolbar/>
         <Typography variant="h3" gutterBottom>New post</Typography>
         <Typography variant="body1" gutterBottom>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe fugit minima nisi. Minima quia vel modi fugiat rem dignissimos. Hic ducimus culpa earum tenetur doloribus architecto sed natus repellat!
         </Typography>
         <Typography variant="body1" gutterBottom>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe fugit minima nisi. Minima quia vel modi fugiat rem dignissimos. Hic ducimus culpa earum tenetur doloribus architecto sed natus repellat!
         </Typography>
                  <Typography variant="body1" gutterBottom>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe fugit minima nisi. Minima quia vel modi fugiat rem dignissimos. Hic ducimus culpa earum tenetur doloribus architecto sed natus repellat!
         </Typography>
      </Container>
   );
};

export default NewPost;