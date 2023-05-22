function Filter({ categories, onCategoryChange }){

  function handleCategory(e){
    const selectedCategory = e.target.value
    onCategoryChange(selectedCategory)
  }

console.log(categories)

  return(
    <>
      <div>
        <label htmlFor="category">Categoria: </label>
        <select
        id="categoria"
        onChange={handleCategory}>
          <option value=''>Todos</option>
            {categories.map((cat)=>(
                <option key={cat._id} value={cat.categoryName}>{cat.categoryName}</option>
            ))}
        </select>
      </div>
    </>
)}

export default Filter;
