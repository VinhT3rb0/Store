var ulList = document.querySelector("#Home");
var ulList2 = document.querySelector("#Introduce");
var ulList3 = document.querySelector("#Comment")

var home = document.querySelector(".home")
var introduce = document.querySelector(".introduce")
var comment = document.querySelector(".comment")

ulList.addEventListener("click", function() {
    ulList2.style.color = "white";
    ulList3.style.color = "white";

    introduce.style.display = "none";
    // brand.style.display = "none";
    home.style.display = "block";
});



ulList2.addEventListener("click", function() {
    this.style.color = "rgb(197, 183, 79)";
    ulList.style.color = "white";
    ulList3.style.color = "white";
    

    introduce.style.display = "block";
    // brand.style.display = "none";
    home.style.display = "none";
});

ulList3.addEventListener("click", function() {
    this.style.color = "rgb(197, 183, 79)";
    ulList.style.color = "white";
    ulList2.style.color = "white";

    introduce.style.display = "none";
    home.style.display = "none";
    comment.style.display = "flex";
});


// ulList3.addEventListener("click", function() {
//     this.style.color = "red";
//     ulList.style.color = "white";
//     ulList2.style.color = "white";


//     introduce.style.display = "none";
//     home.style.display = "none";
//     brand.style.display = "block";

// });




// var a = document.querySelector('form');
// console.log(a);
// a.addEventListener('click', function (e){
//     e.preventDefault();
// })

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


// var nextPage = document.querySelector('.nextPage');
// nextPage.addEventListener('click', ()=>{
//     document.querySelector('#dangnhap').style.display = 'none';
//     document.querySelector('#resgi').style.display = 'block';
// })


// function Success() {
//   alert("Đăng ký thành công");
// }

// var ResEmail =  document.querySelector('#email2');

// const formResgister = document.querySelector('.formResgister');
// formResgister.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log(ResEmail.value);
//     const myTimeout = setTimeout(Success, 100);
//     document.querySelector('#dangnhap').style.display = 'flex';
//     document.querySelector('#resgi').style.display = 'none';

{/* <p>${user.email}</p> */}
// })






