import { useState } from "react";
import style from "./SearchBar.module.css"
import { useSelector } from "react-redux";

function SearchBar({ onSearch }) {
  const searchBarTheme = useSelector((state) => state.searchBarTheme)
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
      className={`${style.styleOne} ${style[searchBarTheme]}`}
      />
    </form>
  </>
)
}

export default SearchBar
