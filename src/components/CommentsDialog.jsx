import { CircularProgress, Dialog, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemText, Typography, Fade } from "@mui/material";
import { closeDialog } from "../features/dialog/dialogSlice";
import { useDispatch, useSelector } from "react-redux";

const CommentsDialog = ({buttonRef}) => {
   const dispatch = useDispatch();
   const {open} = useSelector((store) => store.dialog);
   const {items, isLoading, error} = useSelector((store) => store.comments);

   const handleClose = () => {
      dispatch(closeDialog());
   }

   const handleExited = () => {
  setTimeout(() => {
   console.log(buttonRef);
   
    buttonRef.current?.focus();
  }, 0);
};
  
   return (
      <Dialog
         open={open}
         scroll="paper"
         onClose={handleClose}         
         slots={{ transition: Fade }}
         slotProps={{
            transition: {
               onExited: handleExited
            }
         }}
         fullWidth
         maxWidth="sm"
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