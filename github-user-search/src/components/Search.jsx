import React, { useState } from "react";

const SearchBar = ({onSearch}) => {
   const  [username, setUsername] = useState('')
   
   const handleSearch = (e) => {
    e.preventDefault()
    if(username.trim()) {
        setError('Please enter a Github username')
        return;
    }
       setError('');
        onSearch(username);
    }
   

   return (
    <div>
        <form onSubmit={handleSearch}>
        <input 
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search Github username"
         />
         <button onClick={handleSearch}>Search</button>
         </form>
         {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
   );
};

export default SearchBar

