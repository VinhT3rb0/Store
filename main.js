var ulList = document.querySelector("#Home");
var ulList2 = document.querySelector("#Introduce");
var ulList3 = document.querySelector("#Brand");

var home = document.querySelector(".home")
var introduce = document.querySelector(".introduce")
var brand = document.querySelector(".brand")

ulList.addEventListener("click", function() {
    this.style.color = "red";
    ulList2.style.color = "white";
    // ulList3.style.color = "white";

    introduce.style.display = "none";
    // brand.style.display = "none";
    home.style.display = "block";
});

ulList2.addEventListener("click", function() {
    this.style.color = "red";
    ulList.style.color = "white";

    introduce.style.display = "block";
    // brand.style.display = "none";
    home.style.display = "none";
});

// ulList3.addEventListener("click", function() {
//     this.style.color = "red";
//     ulList.style.color = "white";
//     ulList2.style.color = "white";


//     introduce.style.display = "none";
//     home.style.display = "none";
//     brand.style.display = "block";

// });