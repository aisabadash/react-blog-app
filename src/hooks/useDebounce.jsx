import { useEffect, useState } from "react";

const useDebounce = (value, delay = 500) => {
   const [debounceValue, setDebounceValue] = useState(value);

   useEffect(()=>{
      const id = setTimeout(()=>{
         console.log("Setting timeout");         
         setDebounceValue(value);
      }, delay);

      return () => {
         console.log("Clearing timeout");
         clearTimeout(id);
      }
   }, [value, delay]);

   return debounceValue;
}

export default useDebounce;