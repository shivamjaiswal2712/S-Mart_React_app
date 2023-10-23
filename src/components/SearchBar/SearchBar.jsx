import { useState } from "react";
import { products } from "../../utils/products";

const SearchBar = (setFilterList) => {
    const [inputValue, setInputValue] = useState(null);
    const handleChange = (input) => {
        setInputValue(input.target.value);
        setFilterList(products.filter(item => item.productName?.toLowerCase().includes(inputValue?.toLowerCase())));
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