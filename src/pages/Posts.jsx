import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Grid, Toolbar} from "@mui/material";
import { setToolbarTitle } from "../features/toolbar/toolbarSlice";
import { fetchPosts, addNewPost } from "../features/posts/postsSlice";
import { setSearchQuery } from "../features/search/searchSlice";
import PostCard from "../components/PostCard";
import PostSpeedDail from "../components/PostsSpeedDail";
import SearchInput from "../components/SearchInput";
import useDebounce from "../hooks/useDebounce";


const Posts = () => {
   const dispatch = useDispatch();
   const {items, error} = useSelector((store) => store.posts);
   const {query} = useSelector((store) => store.search);
   const debounceQuery = useDebounce(query, 600);

   useEffect(()=>{
      dispatch(setToolbarTitle("All posts"));
   },[]);

   useEffect(()=> {
      dispatch(fetchPosts(debounceQuery));
   }, [debounceQuery]);

   const setSearchValue = (value) => {
      dispatch(setSearchQuery(value));
   }

   return (
      <Container>
         <Toolbar/>
         <Box sx={{ my: "2rem"}}>
            <PostSpeedDail />
            <SearchInput id="posts-search" placeholder="Search by title..." searchValue={query} setSearchValue={setSearchValue}/>

            {error && <p style={{textAlign: "center"}}>An error occured: {error}</p>}

            {!error && 
               <Grid container spacing={1.5}>
                     {items.map((item) => (
                        <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                           <PostCard post={item}/>
                        </Grid>
                     ))}
               </Grid>
            }
            {/* <button type="button" onClick={()=>{
               dispatch(addNewPost({title: "hello", body: "Hello, world", userId: 1}));
               }}>Add</button> */}

         </Box>
      </Container>
   );
};

export default Posts;