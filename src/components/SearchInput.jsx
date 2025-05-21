import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

const SearchInput = ({id, placeholder, searchValue, setSearchValue}) => {
   return (
         <TextField
            id={id}
            value={searchValue}
            placeholder={placeholder}
            type="search" 
            fullWidth
            sx={{ my: 2 }}
            slotProps={{
               input: {
                  startAdornment: (
                     <InputAdornment position="start">
                        <SearchIcon/>
                     </InputAdornment>
                  ),
               },
            }}
            onChange={(e) => setSearchValue(e.target.value)}
         />
   );
}

export default SearchInput;