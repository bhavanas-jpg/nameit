import React from 'react'
import '../SearchBox/SearchBox.css'

const searchBox = ({onInputChange}) => {
  return (
    <div className="search-container">
        <input  placeholder='Type keywords'
        className="search-input"
        onChange ={ (event) =>{
            onInputChange(event.target.value)
        } 
        } />

    </div>
  )
}

export default searchBox