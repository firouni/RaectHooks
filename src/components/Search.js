import React from "react";
import Rate from "./Rate";
import {InputGroup,FormControl} from "react-bootstrap";
import "../App.css";

function Search ({setSearch,rate,setRate}) {
    return (
        <div className="search-container">
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </InputGroup.Text>
                <FormControl
                    placeholder="Moviename"
                    aria-label="Moviename"
                    aria-describedby="basic-addon1"
                    onChange={(e)=> setSearch(e.target.value)}
                />
            </InputGroup>
            <Rate rate={rate} setRate={setRate} />
        </div>
    )
}

export default Search;