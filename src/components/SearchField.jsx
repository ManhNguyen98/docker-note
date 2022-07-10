import React from 'react'
import { ReactComponent as IconSearch } from "../assets/icons/icon-magnifying-glass.svg"
import { ReactComponent as IconClose } from "../assets/icons/icon-xmark.svg"

const SearchField = ({searchKey, onSearch}) => {
  const handleSearch = (e) => {
    const { value } = e.target
    onSearch(value)
  }
  const renderBtnClearSearch = () => {
    return (
      <button onClick={() => onSearch('')} className="btn-clear">
        <IconClose fill='#737682' width={16} height={16}/>
      </button>
    )
  }
  return (
    <div className='search-field-wrapper'>
      <IconSearch fill='#737682' width={16} height={16}/>
      <input type="text" placeholder='Search' value={searchKey} onChange={handleSearch}/>
      {
        searchKey !== '' ? renderBtnClearSearch() : null
      }
    </div>
  )
}

export default SearchField