import Select from "react-select";
import { products } from "../utils/products";

const options = [
    { value: "sofa", label: "Sofa" },
    { value: "chair", label: "Chair" },
    { value: "watch", label: "Watch" },
    { value: "mobile", label: "Mobile" },
    { value: "wireless", label: "Wireless" },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#0f3460",
        color: "white",
        borderradius: "5px",
        border: "none",
        boxShadoww: "none",
        width: "200px",
        height: "40px",
    }),

    options: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "0f3460" : "white",
        color: state.isSelected ? "white" : "#0f3460",
        "&:hover": {
            backgroundColor: "#0f3460",
            color: "white",
        },
    }),

    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};

const FilterSelect = (setFilterList) => {
    const handleChange = (selectedOption) => {
        setFilterList(products.filter(item => item.category === selectedOption.value))
    }

    return(
        <Select 
        options={options}
        defaultValue={{ value: "", label: "Filter By Category" }}
        styles={customStyles}
        onChange={handleChange} />
    );
}

export default FilterSelect;