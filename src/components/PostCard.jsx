import { Card, CardHeader, CardContent, CardActions, IconButton, Avatar, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { red } from "@mui/material/colors";

const PostCard = ({post}) => {
   
   return (
      <Card>
         <CardHeader
            avatar={
               <Avatar aria-label="post title">
                  {post.title[0].toUpperCase()}
               </Avatar>
            }
            action={
               <IconButton aria-label="delete post">
                  <DeleteIcon sx={{ color: red[500] }} />
               </IconButton>
            }
            title={post.title}
            subheader={`User ${post.userId}`}
            />
         <CardContent>
            <Typography variant="body2">
               {post.body.length <= 75 ? post.body : (post.body.substr(0, 75) + "...")}
            </Typography>
         </CardContent>
         <CardActions disableSpacing>
            <IconButton aria-label="post details">
               <ArrowForwardIcon />
            </IconButton>
         </CardActions>
      </Card>
   );
}

export default PostCard;