"use strict";
function main() {
    const mobileNavControl = document.getElementById("mobile-nav-control");
    // const navigationList = document.querySelector('nav > ul');
    const navigationBar = document.querySelector("nav");
    const mobileNavControlLabel = document.querySelector("#mobile-nav-control ~ label");
    document.addEventListener("touchstart", function() {}, true);
    mobileNavControl.addEventListener("change", function() {
        navigationBar.classList.toggle("displayed");
        if (this.checked === true) mobileNavControlLabel.innerHTML = "Close";
        else mobileNavControlLabel.innerHTML = "Menu";
    });
}
window.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOM fully loaded and parsed");
    main();
});

//# sourceMappingURL=index.72be8890.js.map
