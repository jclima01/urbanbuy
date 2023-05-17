import { useState } from "react";

function SearchBar() {
  const [name, setName] = useState('') 

return(
  <>
    <form>
      <input
      type='search'
      placeholder="Enter product"
      name={name}
      onChange={e => setName(e.target.value)}
      />
    </form>
  </>
)
}

export default SearchBar
