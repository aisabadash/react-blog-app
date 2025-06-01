import { Box, Button, Container, InputAdornment, Paper, Stack, Step, StepLabel, Stepper, TextField, Toolbar, Typography } from "@mui/material";
import { setToolbarTitle } from "../store/features/toolbar/toolbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import steps from "../config/post-create-steps";
import SaveIcon from '@mui/icons-material/Save';
import PreviewDialog from "../components/PreviewDialog";
import { openDialog } from "../store/features/preview-dialog/previewDialogSlice";
import { updateNewPost, setStep, setErrors, resetNewPost } from "../store/features/new-post/newPostSlice";
import { addNewPost } from "../store/features/posts/postsSlice";
import { showSnackbar } from "../store/features/snackbar/snackbarSlice";

const NewPost = () => {
   const { item, errors, step } = useSelector((store) => store.newPost);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(setToolbarTitle("New post"));
   }, []);
   
   useEffect(() => {
      dispatch(resetNewPost());
   }, []);

   useEffect(() => {
      if (step === 2) {
         dispatch(openDialog());
      }
   },[step]);

   const savePost = async () => {
      try {
         const data = await dispatch(addNewPost(item)).unwrap();
         dispatch(setStep(0));
         dispatch(resetNewPost());

         dispatch(showSnackbar({ message: "The post was successfully added!", severity: "success" }));
      } catch (error) {
         dispatch(showSnackbar({ message: `An error occurred while adding the post: ${error}`, severity: "error" }));
      }
   }

   const handleNext = () => {     
      if (step === 0 && item.title.trim() === "") {
         dispatch(setErrors({ title: true }));
         return;
      }
      if (step === 1 && item.body.trim() === "") {
         dispatch(setErrors({ body: true }));
         return;
      }      
      if (step === 3) {
         savePost();
         return;
      }
      
      dispatch(setErrors({ title: false, body: false }));
      dispatch(setStep(step + 1));
   };

   const handleBack = () => {
      if (step === 0) return;
      dispatch(setStep(step - 1));

   };

   return (
      <Container>
         <Toolbar />
         <Box sx={{ width: "100%", maxWidth: "sm", margin: "auto", my: "2rem" }}>
            <Paper elevation={3} sx={{ display: "flex", flexDirection: "column", gap: 1.5, p: 2 }}>
               <Stepper activeStep={step} alternativeLabel>
                  {steps.map((step, index) => {
                     return (
                        <Step key={index}>
                           <StepLabel>{step.name}</StepLabel>
                        </Step>
                     );
                  })}
               </Stepper>

               {step === 0 &&
                  <TextField
                     id="new-post-textfield-title"
                     name="new-post-textfield-title"
                     fullWidth
                     label={steps[step].name}
                     value={item.title}
                     slotProps={{
                        input: {
                           startAdornment: (
                              <InputAdornment position="start">
                                 {steps[step].icon}
                              </InputAdornment>
                           ),
                        },
                     }}
                     onChange={(e) => {dispatch(updateNewPost({ userId: 1, title: e.target.value }))}}
                     error={errors.title}
                     helperText={errors.title && "Title is required"}
                     autoFocus
                  />
               }

               {step === 1 &&
                  <TextField
                     id="new-post-textfield-text"
                     name="new-post-textfield-text"
                     fullWidth
                     multiline
                     minRows={2}
                     label={steps[step].name}
                     value={item.body}
                     slotProps={{
                        input: {
                           startAdornment: (
                              <InputAdornment position="start" sx={{ alignSelf: "flex-start" }}>
                                 {steps[step].icon}
                              </InputAdornment>
                           ),
                        },
                     }}
                     onChange={(e) => {dispatch(updateNewPost({ body: e.target.value }))}}
                     error={errors.body}
                     helperText={errors.body && "Text is required"}
                     autoFocus
                  />
               }

               <Stack direction="row" spacing={2} justifyContent="space-between">
                  <Button
                     disabled={step === 0}
                     variant="text"
                     onClick={handleBack}>
                     Back
                  </Button>
                  <Button
                     variant="contained"
                     endIcon={<SaveIcon />}
                     onClick={handleNext}
                  >
                     {step >= steps.length - 1 ? "Save" : "Next"}
                  </Button>
               </Stack>
            </Paper>
         </Box>
         <PreviewDialog />
      </Container>
   );
};

export default NewPost;