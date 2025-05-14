import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Posts from './pages/Posts';
import Home from './pages/Home';
import NewPost from './pages/NewPost';

import Sidebar from './components/Sidebar';


function App() {

  return (
    <Router>      
        <Sidebar/>
        <Routes>
          <Route index path="/" element={<Home/>}></Route>
          <Route path="/posts">
            <Route index element={<Posts/>}/>
            <Route path="create" element={<NewPost/>}/>
          </Route>
        </Routes>
    </Router>
  );
};

export default App;
