import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Posts from './pages/Posts';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import Post from './pages/Post';
import Sidebar from './components/AppSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { blue } from '@mui/material/colors';
import AppSnackbar from './components/AppSnackbar';
import { useEffect } from 'react';
import { fetchPosts } from './store/features/posts/postsSlice';

const basename = import.meta.env.MODE === 'production'
  ? import.meta.env.VITE_BASE_PATH
  : '/';

function App() {
  const {mode} = useSelector((store) => store.theme);
  const dispatch = useDispatch();

  const appTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: blue[500],
      },
    },
  });

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Router basename={basename}>      
          <Sidebar/>
          <AppSnackbar/>
          <Routes>
            <Route index path="/" element={<Home/>}></Route>
            <Route path="/posts">
              <Route index element={<Posts/>}/>
              <Route path=":id" element={<Post/>}/>
              <Route path="create" element={<NewPost/>}/>
            </Route>
          </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;