let fields = document.querySelector("#fields");
let login = document.querySelector("#login");
let password = document.querySelector("#password");
let login1 = document.querySelector("#login1");
let password1 = document.querySelector("#password1");
let submit = document.querySelector("#submit");
let spinner = document.querySelector("#spinner");

let enter = () => {
    if (!login.value){
        login.style.borderColor = 'red';
        login1.style.display = 'block';
    } else {
        login.style.borderColor = 'initial';
        login1.style.display = 'none';
    }

    if (!password.value){
        password.style.borderColor = 'red';
        password1.style.display = 'block';
    } else {
        password.style.borderColor = 'initial';
        password1.style.display = 'none';
    }

    if (login.value && password.value){
        fields.disabled = true;
        fields.style.opacity = '.5';
        spinner.style.display = 'block';
        setTimeout(() => {
            fields.disabled = false;
            fields.style.opacity = '1';
            spinner.style.display = 'none';
            login.value = "";
            password.value = "";
        }, 2000);
    }
};

submit.addEventListener("click", enter);
