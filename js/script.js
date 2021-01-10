'use strict';

function functionResponsive() {
    let select = document.getElementById("nav-container");
    if (select.className === "nav-container"){
        select.className += " responsive";
    } else {
        select.className = "nav-container";
    }
}
