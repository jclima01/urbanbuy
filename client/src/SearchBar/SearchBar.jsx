import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('') 
  
  function handleInputChange(e){
    setSearchTerm(e.target.value)
    onSearch(e.target.value)
  }

return(
  <>
    <form>
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
