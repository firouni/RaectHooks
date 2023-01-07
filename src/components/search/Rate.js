import React from "react";
import "../display/movieDisplay.css";

function Rate ({rate,setRate}) {
    const arrStar = [1, 2, 3, 4, 5]
    return (
        <div className="rateContainer">
            {arrStar.map((el) => 
            <span onClick={()=>setRate(el)}>
                {el <= rate ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i>}
            </span>
            )}
        </div>
    )
}

export default Rate;