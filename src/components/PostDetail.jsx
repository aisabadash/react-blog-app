import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PostDetail = ({id}) => {

   return (
      <Card sx={{ width: '100%' }}>
         <CardHeader
            avatar={
               <Avatar aria-label="post">
                  M
               </Avatar>
            }
            title={`Post #${id} title`}
            subheader={"Post user"}
         />
         <CardContent>
            <Typography variant="body2">
               {"Post body"}
            </Typography>
         </CardContent>
         <CardActions>
            <Button variant="contained" size="small" startIcon={<DeleteIcon />} color="error">Delete</Button>
            <Button variant="outlined" size="small" startIcon={<ArrowBackIcon />}>Back to list</Button>
         </CardActions>
      </Card>
   );
}

export default PostDetail;