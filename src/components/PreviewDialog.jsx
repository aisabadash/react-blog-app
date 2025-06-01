import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button, Stack} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog } from "../store/features/preview-dialog/previewDialogSlice";
import { setStep } from "../store/features/new-post/newPostSlice";

const PreviewDialog = () => {
   const { open } = useSelector((store) => store.previewDialog);
   const { item, step } = useSelector((store) => store.newPost);
   const dispatch = useDispatch();

   const onClose = () => dispatch(closeDialog());

   const onEdit = () => {
      dispatch(closeDialog());
      dispatch(setStep(step - 1));
   }

   const onConfirm = () => {
      dispatch(closeDialog());
      dispatch(setStep(step + 1));
   }

   return (
      <Dialog
         open={open}
         onClose={(event, reason) => {
            if (reason === "backdropClick" || reason === "escapeKeyDown") {
               return;
            }
            onClose();
         }}
         fullWidth
         maxWidth="sm"
         closeAfterTransition={false}
         disableEscapeKeyDown
      >
      <DialogTitle>Preview</DialogTitle>
      <DialogContent dividers>
         <Stack spacing={2}>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body2">{item.body}</Typography>
         </Stack>
      </DialogContent>
      <DialogActions>
         <Button onClick={onEdit} variant="text">
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