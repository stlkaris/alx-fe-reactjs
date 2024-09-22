import React, { useState } from "react";

const SearchBar = ({onSearch}) => {
   const  [username, setUsername] = useState('')
   
   const handleSearch = () => {
    if(username.trim()) {
        onSearch(username);
    }
   }

   return (
    <div>
        <input 
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search Github username"
         />
         <button onClick={handleSearch}>Search</button>
    </div>
   );
};

export default SearchBar

