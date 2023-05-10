var inputField = document.querySelector(".input-search");
var logButton = document.querySelector(".log-button");
var hide = document.querySelector(".hide");
console.log(inputField);
console.log(logButton);


inputField.addEventListener('focus', () => {
    hide.style.display = "block"
});

inputField.addEventListener('blur', () => {
    hide.style.display = "none"
});

inputField.addEventListener("input", () => {
    document.querySelector(".hide2").textContent = inputField.value;
});

logButton.addEventListener("click", () => {
    const inputValue = inputField.value;
    console.log(inputValue);

    // if (inputValue == x) {
    //     window.location.href = "./aosomi/aosomi.html";
    // }

    switch (String(inputValue)) {
        case "ao so mi":
        case "áo":
        case "áo sơ mi":
        case "Áo sơ mi":

            window.location.href = "./aosomi/aosomi.html";
            break;
        case "quan au":
        case "quần âu":
        case "Quần âu":
        case "quần":
            window.location.href = "./quanau/quanau.html";
            break;
        case "giầy":
        case "giay da":
        case "giày da":
        case "Giày da":
            window.location.href = "./giayda/giayda.html";
            break;

        case "that lung":
        case "thắt lưng":
        case "Thắt lưng":
            window.location.href = "./thatlung/thatlung.html";
            break;

        case "Suit":
        case "suit":
            window.location.href = "./suit/suit.html";
            break;
        default:
            alert("không có sản phẩm cần tìm")
            break;
    }
});



