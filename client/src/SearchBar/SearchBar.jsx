import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('') 
  
  function handleInputChange(e){
    setSearchTerm(e.target.value)
  }

  function handleSearch(){
    onSearch(searchTerm)
  }

return(
  <>
    <form onSubmit={handleSearch}>
      <input
      type='search'
      placeholder="Enter product"
      value={searchTerm}
      onChange={handleInputChange}
      />
    </form>
  </>
)
}

export default SearchBar
