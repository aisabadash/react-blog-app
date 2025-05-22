import { Card, CardHeader, CardContent, CardActions, IconButton, Avatar, Typography, Skeleton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../features/posts/postsSlice";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostCard = ({post}) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const {isLoading} = useSelector((store) => store.posts);
   // const [isLoading, setIsLoading] = useState(true);
   
   return (
      <Card>
         <CardHeader
            avatar={
               isLoading ? (
                  <Skeleton animation="wave" variant="circular" width={40} height={40} />
               ) : (
                  <Avatar aria-label="post title">
                     {post.title[0].toUpperCase()}
                  </Avatar>
               )               
            }
            action={
               isLoading ? (null) : (
                  <IconButton aria-label="delete post" onClick={()=>{dispatch(deletePost(post.id));}}>
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
                  {post.body.length <= 75 ? post.body : (post.body.substr(0, 75) + "...")}
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