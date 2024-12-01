import React from "react";
import "./slide1.css"

function slide1() {
    
    return(
        <>
            <div class="slider-container">
                <div class="slider">
                </div>
                <button class="prev" onclick="prevSlide()">&#10094;</button>
                <button class="next" onclick="nextSlide()">&#10095;</button>
                <div class="dots-container" id="dots"></div>
            </div>

            <script src="script.js"></script>
        </>
    )
}

export default slide1;