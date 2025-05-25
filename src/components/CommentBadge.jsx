import CommentIcon from '@mui/icons-material/Comment';
import { Badge, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { openDialog } from '../features/dialog/dialogSlice';


const CommentBadge = () => {
   const dispatch = useDispatch();
   const {items, isLoading, error} = useSelector((store) => store.comments);
   const {open} = useSelector((store) => store.dialog);

   return (
      <IconButton color="inherit" aria-label="post comments" onClick={() => dispatch(openDialog())}>
         <Badge color="error" badgeContent={items.length || 0} showZero >
            <CommentIcon />
         </Badge>
      </IconButton>
   );
}

export default CommentBadge;