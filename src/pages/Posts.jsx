import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Toolbar, Paper } from "@mui/material";
import { setToolbarTitle } from "../features/toolbar/toolbarSlice";
import { deletePost, fetchPosts, addNewPost } from "../features/posts/postsSlice";
import PostCard from "../components/PostCard";
import PostSpeedDail from "../components/PostsSpeedDail";
import SearchInput from "../components/SearchInput";
import { setSearchQuery } from "../features/search/searchSlice";


const Posts = () => {
   const dispatch = useDispatch();
   const {items, isLoading, error} = useSelector((store) => store.posts);
   const {query} = useSelector((store) => store.search);

   useEffect(()=>{
      dispatch(setToolbarTitle("All posts"));
   },[]);

   useEffect(()=> {
      dispatch(fetchPosts(query));
   }, [query]);

   const setSearchValue = (value) => {
      dispatch(setSearchQuery(value));
   }

   return (
      <Container>
         <Toolbar/>
         <PostSpeedDail />
         <SearchInput id="posts-search" placeholder="Search by title..." searchValue={query} setSearchValue={setSearchValue}/>

         {isLoading && <h2>Loading...</h2>}
         
         {/* {error && <h2>An error occured: {error}</h2>} */}

         {/* <ul>
            {items.map((item) => (
               <li key={item.id}>
               <span>{item.title}</span>
               <button type="button" onClick={()=>{
                  dispatch(deletePost(item.id));
                  }}>Delete</button>
                  </li>
                  ))}
                  </ul> */}

         {/* <button type="button" onClick={()=>{
            dispatch(addNewPost({title: "hello", body: "Hello, world", userId: 1}));
            }}>Add</button> */}

         {error 
         ? <h2>An error occured: {error}</h2>
         : <Grid container spacing={1.5}>
               {items.map((item) => (
                  <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                     <PostCard post={item}/>
                  </Grid>
               ))}
         </Grid>
         }
      </Container>
   );
};

export default Posts;