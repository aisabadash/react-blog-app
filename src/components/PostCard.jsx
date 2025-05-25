import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../features/posts/postsSlice";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent, CardActions, IconButton, Avatar, Typography, Skeleton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { showSnackbar } from "../features/snackbar/snackbarSlice";

const PostCard = ({post}) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const {isLoading} = useSelector((store) => store.posts);

   const handleDeletePost = async (id) => {
      try {
         const data = await dispatch(deletePost(id)).unwrap();
         dispatch(showSnackbar({ message: "The post was successfully deleted!", severity: "success" }));
      } catch (error) {
         dispatch(showSnackbar({ message: `An error occurred while deleting the post: ${error}`, severity: "error" }));
      }
   };
   
   return (
      <Card>
         <CardHeader
            avatar={
               isLoading ? (
                  <Skeleton animation="wave" variant="circular" width={40} height={40} />
               ) : (
                  <Avatar aria-label="post title">
                     {post.title?.charAt(0).toUpperCase()}
                  </Avatar>
               )               
            }
            action={
               isLoading ? (null) : (
                  <IconButton aria-label="delete post" onClick={() => handleDeletePost(post.id)}>
                     <DeleteIcon color="error" />
                  </IconButton>
               )
            }
            title={
               isLoading ? (
                  <Skeleton animation="wave" height={10} width="80%" sx={{marginBottom: "6"}} />
               ) : (
                   post.title
               )              
            }
            subheader={
               isLoading ? (
                  <Skeleton animation="wave" height={10} width="40%" />
               ) : (                  
                  `User ${post.userId}`
               )               
            }
            />
         <CardContent>
            {isLoading ? (
               <React.Fragment>
                  <Skeleton animation="wave" height={10} sx={{marginBottom: "6"}} />
                  <Skeleton animation="wave" height={10} width="80%" />
               </React.Fragment>
            ) : (
               <Typography variant="body2">
                  {post.body?.length <= 75 ? post.body : (post.body.substr(0, 75) + "...")}
               </Typography>
            )}
         </CardContent>
         <CardActions disableSpacing>
            {isLoading ? (null) : (
               <IconButton aria-label="post details" onClick={() => navigate(`/posts/${post.id}`)}>
                  <ArrowForwardIcon />
               </IconButton>
            )}
         </CardActions>
      </Card>
   );
}

export default PostCard;