import { SpeedDial } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

const PostSpeedDail = () => {

   const navigate = useNavigate();

   return (
      <SpeedDial
         ariaLabel="add post"
         sx={{ position: 'fixed', bottom: 16, right: 16 }}
         icon={<AddIcon />}
         onClick={() => {
            navigate("/posts/create");
         }}
      />
   );
} 

export default PostSpeedDail;