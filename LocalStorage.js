
function clearLocalStorageAndReload() {
    localStorage.clear();
    location.reload();
}

    

function saveUserDataToLocalStorage(userData) {
    console.log(userData);

    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log(users);
    clearLocalStorageAndReload(users);
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
}

var nextPage = document.querySelector('.nextPage');
nextPage.addEventListener('click', ()=>{
    document.querySelector('#dangnhap').style.display = 'none';
    document.querySelector('#resgi').style.display = 'block';
})



function Success() {
  alert("Đăng ký thành công");
}

var ResEmail =  document.querySelector('#email2');

const formResgister = document.querySelector('.formResgister');
formResgister.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(ResEmail.value);
    const myTimeout = setTimeout(Success, 100);
    document.querySelector('#dangnhap').style.display = 'flex';
    document.querySelector('#resgi').style.display = 'none';


})

function renderUserList() {
    // const userList = document.querySelector('#user-list');
    // userList.innerHTML = '';

    const ListName = document.querySelector('.ListName')
    const Acc = JSON.parse(localStorage.getItem('users')) || [];
    Acc.forEach((user) => {
        const AccName = `
            <p>${user.email}</p>
        `;
        ListName.innerHTML = AccName;
        document.querySelector('#dangnhap').style.display = 'none';
        document.querySelector('.out').style.display = 'none';
    });
}



const userForm = document.querySelector('.form');
userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.querySelector('#email');
    console.log(emailInput);
    const userData = {
        email: emailInput.value
    };

    saveUserDataToLocalStorage(userData);
    renderUserList();
    emailInput.value = '';
});


window.addEventListener('load', () => {
    renderUserList();
});