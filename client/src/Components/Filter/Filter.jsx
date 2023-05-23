import {useState} from "react";

{/*eslint-disable-next-line*/}
function Filter({filter, onFilterChange }){
  const [selectedFilter,setSelectedFilter] = useState('')

  function handleFilter(e){
{/*eslint-disable-next-line*/}
    setSelectedFilter(e.target.value)
    onFilterChange(selectedFilter)
  }

  return(
      <div>
        <p>Filtrar : </p>
			<select onChange={handleFilter}>
				<option disabled default selected>Elegir una opción</option>
{/*eslint-disable-next-line*/}
				{filter.map((a, i) => (
					<option key={i} value={a.rating}>{a.rating}</option>
				))}
			</select>
        {/*	<input className={style.inputBtn} type='button' onClick={handleRemoveFilter} value='Limpiar Filtros' /> */}
      </div>
)}

export default Filter;
