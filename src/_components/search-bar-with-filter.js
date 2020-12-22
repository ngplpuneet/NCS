import { filterType } from '../_constants/homepage.constants'

const SearchBarWithFilter = ({handleSearchValue, inputValue, handleSortByDropdown, handleSearchButton}) => {
    return (
        <div className="d-flex justify-content-between">
            <form className="form-inline">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" value={inputValue} onChange={(e) => handleSearchValue(e.target.value)}/>
                <span className="btn btn-outline-success my-2 my-sm-0" onClick={() => handleSearchButton()}>Search</span>
            </form>
            <div className="dropdown">
                <span className="btn btn-light dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort by
                </span>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <span className="dropdown-item" onClick={(e) => handleSortByDropdown(filterType.YEAR_BY_DESC,e)}>Sort by year in descending order</span>
                    <span className="dropdown-item" onClick={(e) => handleSortByDropdown(filterType.YEAR_BY_ASC,e)}>Sort by year in ascending order</span>
                    <span className="dropdown-item" onClick={(e) => handleSortByDropdown(filterType.TITLE_BY_DESC,e)}>Sort by title in descending order</span>
                    <span className="dropdown-item" onClick={(e) => handleSortByDropdown(filterType.TITLE_BY_ASC,e)}>Sort by title in ascending order</span>
                </div>
            </div>
        </div>
    )
}

export default SearchBarWithFilter;