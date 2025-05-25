import { Box, CircularProgress, Container, Toolbar } from "@mui/material";
import { setToolbarTitle } from "../features/toolbar/toolbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostDetail from "../components/PostDetail";
import { fetchPost } from "../features/post/postSlice";
import { fetchComments } from "../features/comments/commentsSlice";
import CommentsDialog from "../components/CommentsDialog";

const Post = () => {
   const { id } = useParams();
   const dispatch = useDispatch();
   const {isLoading, error} = useSelector((store) => store.post);

   useEffect(() => {
      dispatch(setToolbarTitle(`Post #${id}`));
   }, []);

   useEffect(()=> {
      dispatch(fetchPost(id))
      .unwrap()
      .then(() => dispatch(fetchComments(id)));
   }, [dispatch, id]);

   return (
      <Container>
         <Toolbar />
         
         <Box sx={{ width: '100%', display: "flex", flexDirection: "column", alignItems: "center", my: "2rem" }}>

            {isLoading && (
               <CircularProgress />
            )}

            {error && (
               <p>An error occured: {error}</p>
            )}

            {!isLoading && !error && (
               <PostDetail />
            )}

         </Box>
      </Container>
   );
};

export default Post;