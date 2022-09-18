import React from "react";
import NavBar from "../browse/nav-bar/navbar";
import SearchForm from "./SearchForm/searchform";
import SearchStyle from "./Search.module.css";

const Search = () => {
  return (
    <div className={SearchStyle["background"]}>
      <NavBar className={SearchStyle["navbar"]} />
      <div className={SearchStyle["forminput"]}>
        <SearchForm />
      </div>
    </div>
  );
};

export default Search;
