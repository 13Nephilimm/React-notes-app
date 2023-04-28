import { MdSearch } from "react-icons/md"
import React from "react"
import NotesList from "./NotesList"

const SearchBar = ({ handleSearchNote }) => {

    return (
        <div className="search-container">
            <MdSearch size='1.3em' className="search-icon" />
            <input 
                className="search-input" 
                type='text' 
                placeholder="search..."
                onChange={(e) => {handleSearchNote(e.target.value)}} 
            />
        </div>
    )
}

export default SearchBar