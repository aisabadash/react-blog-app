import AddIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';

const menu = [
   {primary: "Home", icon: <HomeIcon/>, to: "/"},
   {primary: "All posts", icon: <ListIcon/>, to: "/posts"},
   {primary: "New post", icon: <AddIcon/>, to: "/posts/create"}
];

export default menu;