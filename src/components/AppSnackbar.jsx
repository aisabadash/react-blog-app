import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideSnackbar } from "../features/snackbar/snackbarSlice";

const AppSnackbar = () => {
   const dispatch = useDispatch();
   const { open, message, severity } = useSelector((state) => state.snackbar);

   const handleClose = (_, reason) => {
      if (reason === 'clickaway') return;
      dispatch(hideSnackbar());
   };

   return (
      <Snackbar
         open={open}
         autoHideDuration={3000}
         onClose={handleClose}
         anchorOrigin={{vertical: "bottom", horizontal: "left"}}
      >
         <Alert severity={severity} variant="filled" onClose={handleClose} sx={{ width: '100%' }}>
            {message}
         </Alert>
      </Snackbar>
   );
}

export default AppSnackbar;