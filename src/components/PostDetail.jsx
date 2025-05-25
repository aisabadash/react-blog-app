import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../features/posts/postsSlice";
import { showSnackbar } from "../features/snackbar/snackbarSlice";


const PostDetail = () => {
   const {item} = useSelector((store) => store.post);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleDeletePost = async (id) => {
      try {
         const data = await dispatch(deletePost(id)).unwrap();
         navigate("/posts");
         dispatch(showSnackbar({ message: "The post was successfully deleted!", severity: "success" }));
      } catch (error) {
         dispatch(showSnackbar({ message: `An error occurred while deleting the post: ${error}`, severity: "error" }));
      }
   }

   return (
      <Card sx={{ width: '100%' }}>
         <CardHeader
            avatar={
               <Avatar aria-label="post">
                  {item.title?.charAt(0).toUpperCase()}
               </Avatar>
            }
            title={item.title}
            subheader={`User ${item.userId}`}
            />
         <CardContent>
            <Typography variant="body2">
               {item.body}
            </Typography>
         </CardContent>
         <CardActions>
            <Button variant="contained" size="small" startIcon={<DeleteIcon />} color="error" onClick={() => handleDeletePost(item.id)}>Delete</Button>
            <Button variant="outlined" size="small" startIcon={<ArrowBackIcon />} onClick={() => navigate("/posts")}>Back to list</Button>
         </CardActions>
      </Card>
   );
}

export default PostDetail;