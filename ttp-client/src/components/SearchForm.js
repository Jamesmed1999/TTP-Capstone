//<Input icon="search" placeholder="Search Movies . . ." />

// API #1 (option)
// https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb
//api key = api_keya65f9b291a589567b929f15ba75cf51a

// API #2 (option)
// list: https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
// pics: https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US

import React from "react";

function SearchForm(props) {

    function onSubmit() {
            fetch(
                "https://api.themoviedb.org/3/movie/550?api_key=a65f9b291a589567b929f15ba75cf51a"
            )
                .then((response) => response.json())
    }

    return (
        <div className="searchDiv">
            <form id="form1" name="form">
                <input type="text" id="forChar"></input>
            </form>
            <button onClick={onSubmit}>Search</button>
        </div>
    );
}
export default SearchForm;        