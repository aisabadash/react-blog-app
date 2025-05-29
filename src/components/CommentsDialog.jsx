import { CircularProgress, Dialog, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemText, Typography } from "@mui/material";
import { closeDialog } from "../store/features/comments-dialog/commentsDialogSlice";
import { useDispatch, useSelector } from "react-redux";

const CommentsDialog = () => {
   const dispatch = useDispatch();
   const { open } = useSelector((store) => store.dialog);
   const { items, isLoading, error } = useSelector((store) => store.comments);

   return (
      <Dialog
         open={open}
         scroll="paper"
         onClose={() => dispatch(closeDialog())}
         fullWidth
         maxWidth="sm"
         closeAfterTransition={false}
      >
         <DialogTitle id="scroll-dialog-title">Comments</DialogTitle>

         <DialogContent dividers={true}>
            {isLoading && <CircularProgress />}
            {error && <Typography color="error">{error}</Typography>}
            {!isLoading && items.length === 0 && <Typography>No comments found.</Typography>}
            {!isLoading && items.length > 0 && (
               <List>
                  {items.map((item) => (
                     <ListItem key={item.id}>
                        <ListItemText
                           primary={item.name}
                           secondary={item.body}
                        />
                     </ListItem>
                  ))}
               </List>
            )}
         </DialogContent>

      </Dialog>
   );
};

export default CommentsDialog;