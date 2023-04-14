function clearLocalStorageAndReload() {
    localStorage.clear();
    location.reload();
}

const ListName = document.querySelector('.ListName')
const Acc = JSON.parse(localStorage.getItem('users')) || [];
Acc.forEach((user) => {
const AccName = `
    <p>${user.email}</p>
`;
ListName.innerHTML = AccName;
document.querySelector('.out').style.display = 'none';
});