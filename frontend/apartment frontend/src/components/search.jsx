import React, { useState } from "react";
// import "./styles.css";
import { useDispatch } from "react-redux";
import { searchBlock } from "../redux/action";

export const SearchBar = () =>{
    const [searchKeyword,setSearchKeyword] = useState('')
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        let current_keyword = e.target.value;
        console.log("HI")
        setSearchKeyword(current_keyword);
    }

    const handleEnterKeyPress = (e) => {
        if (e.key === "Enter") {
           dispatch(searchBlock(searchKeyword))
           console.log("enter")
          }
    }

    return(
        <>
            <input
                onKeyDown={handleEnterKeyPress}
                onChange={handleInputChange}
                placeholder="Search by name, email or role"
                type="text" name="search" id="search-box" 
                className="SearchBar"  />
        </>
    )
}