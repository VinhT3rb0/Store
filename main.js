var ulList = document.querySelector("#Home");
var ulList2 = document.querySelector("#Introduce");
var ulList3 = document.querySelector("#Brand");

var home = document.querySelector(".home")
var introduce = document.querySelector(".introduce")
var brand = document.querySelector(".brand")

ulList.addEventListener("click", function() {
    this.style.color = "rgb(197, 183, 79)";
    ulList2.style.color = "white";
    // ulList3.style.color = "white";

    introduce.style.display = "none";
    // brand.style.display = "none";
    home.style.display = "block";
});



ulList2.addEventListener("click", function() {
    this.style.color = "rgb(197, 183, 79)";
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

var decreaseButton = document.querySelector(".decrease");
var increaseButton = document.querySelector(".increase");
var quantityInput = document.querySelector(".quantity");

decreaseButton.addEventListener("click", function() {
  var currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});

increaseButton.addEventListener("click", function() {
  var currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
})

var a = document.querySelector('form');
console.log(a);
a.addEventListener('click', function (e){
    e.preventDefault();
})

// window.addEventListener('click', function () {
//     document.querySelector('#dangnhap').style.display = 'none';
// })

var login = document.querySelector('.login button[type = button]');


login.addEventListener('click', function(){
    document.querySelector('#dangnhap').style.display = 'flex'
})

var closeLogin = document.querySelector('#dangnhap .close-icon')
    closeLogin.addEventListener('click', function () {
        document.querySelector('#dangnhap').style.display = 'none';
})




document.querySelector('button[type=submit]').addEventListener('click', ()=>{
    getUser();
})


function getUser(){
    var getAcc = document.querySelector("input[name=email]").value
    console.log(getAcc);

    var changeText = document.querySelector(".changeText");
    console.log(changeText);
    changeText.innerText = getAcc;
    document.querySelector('#dangnhap').style.display = 'none';
}



