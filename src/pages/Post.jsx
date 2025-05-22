import { Box, CircularProgress, Container, Toolbar } from "@mui/material";
import { setToolbarTitle } from "../features/toolbar/toolbarSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PostDetail from "../components/PostDetail";

const Post = () => {
   const { id } = useParams();
   const dispatch = useDispatch();
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      dispatch(setToolbarTitle(`Post #${id}`));
   }, []);

   return (
      <Container>
         <Toolbar />
         <Box sx={{ width: '100%', display: "flex", justifyContent: "center", my: "2rem" }}>
            {isLoading && (
               <CircularProgress />
            )}

            {!isLoading && (
               <PostDetail id={id}/>
            )}
         </Box>
      </Container>
   );
};

export default Post;