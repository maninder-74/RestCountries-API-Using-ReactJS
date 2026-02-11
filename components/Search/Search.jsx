import "../Search/Search.css"

const Search = () => {
  return (
    <div>
      <div className="searchFilter">
        <div className="input"> 
             <p>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" id="input" placeholder="Search for a country...." />
            </p>
        </div>
        <div className="filter"> 
              <select  id="select">
                <option hidden>Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
        </div>
     </div>
    </div>
  )
}

export default Search
