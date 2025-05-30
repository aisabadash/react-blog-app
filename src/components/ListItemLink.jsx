import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const ListItemLink = ({ icon, primary, to }) => {
  return (
   <ListItemButton component={Link} to={to}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
   </ListItemButton>
  );
};

export default ListItemLink;