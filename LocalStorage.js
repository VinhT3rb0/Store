
function clearLocalStorageAndReload() {
    localStorage.clear();
    location.reload();
    }

function saveUserDataToLocalStorage(userData) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
}



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

const userForm = document.querySelector('form');
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