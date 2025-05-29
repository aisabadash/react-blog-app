import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button, Stack} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "../store/features/posts/postsSlice";
import { closeDialog } from "../store/features/preview-dialog/previewDialogSlice";
import { resetNewPost, setStep } from "../store/features/new-post/newPostSlice";
import { showSnackbar } from "../store/features/snackbar/snackbarSlice";

const PreviewDialog = () => {

   const { open } = useSelector((store) => store.previewDialog);
   const { item } = useSelector((store) => store.newPost);
   const dispatch = useDispatch();

   const onClose = () => dispatch(closeDialog());

   const onConfirm = async () => {
      try {
         const data = await dispatch(addNewPost(item)).unwrap();
         dispatch(closeDialog());
         dispatch(setStep(0));
         dispatch(resetNewPost());
         dispatch(showSnackbar({ message: "The post was successfully added!", severity: "success" }));
      } catch (error) {
         dispatch(showSnackbar({ message: `An error occurred while adding the post: ${error}`, severity: "error" }));
      }
   }

   return (
      <Dialog
         open={open}
         onClose={onClose}
         fullWidth
         maxWidth="sm"
         closeAfterTransition={false}
      >
      <DialogTitle>Preview</DialogTitle>
      <DialogContent dividers>
         <Stack spacing={2}>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body2">{item.body}</Typography>
         </Stack>
      </DialogContent>
      <DialogActions>
         <Button onClick={onClose} variant="text">
            Edit
         </Button>
         <Button variant="contained" onClick={onConfirm}>
            Confirm
         </Button>
      </DialogActions>
      </Dialog>
   );
};

export default PreviewDialog;