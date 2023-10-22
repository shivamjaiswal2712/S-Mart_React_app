import { useState } from "react";

const SearchBar = (setFilterList) => {
    const [inputValue, setInputValue] = useState(null);
    const handleChange = (input) => {
        setInputValue(input.target.value);
        setFilterList(inputValue?.toLowercase());
    }

    return(
        <div className="search-container">
            <input type="text" placeholder="search..." 
            // value={value} 
            onChange={handleChange} />
            <ion-icon name="search-outline" className="search-icon" />
        </div>
    );
}

export default SearchBar;