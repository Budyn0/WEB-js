const form = document.getElementById('form');
const fname = document.getElementById('fname');
const sname = document.getElementById('sname');
const email = document.getElementById('email');
const birthday = document.getElementById('birthday');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const description = document.getElementById('description');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const snameValue = sname.value.trim();
    const emailValue = email.value.trim();
    const birthdayValue = birthday.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const descriptionValue = description.value.trim();

    if (fnameValue === '') {
        setError(fname, 'Imie jest wymagane');

    } else {
        setSuccess(fname);
    }

    if (snameValue === '') {
        setError(sname, 'Nazwisko jest wymagane');

    } else {
        setSuccess(sname);
    }

    if (emailValue === '') {
        setError(email, 'Email jest wymagany');

    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Podany email jest nie poprawny ')

    } else {
        setSuccess(email);
    }
    if (birthdayValue === '') {
        setError(birthday, 'Data urodzenia jest wymagana');

    } else {
        setSuccess(birthday);
    }

    if (passwordValue === '') {
        setError(password, 'Haslo jest wymagane');
    } else if (passwordValue.length < 8) {
        setError(password, 'Haslo musi miec 8 znakow')
    } else if (passwordValue.search(/[0-9]/) < 0) { 
        setError(password, 'Haslo musi miec jedna cyfre')
    } else {
        setSuccess(password);
    }
    if (password2Value === '') {
        setError(password2, 'Potwierdz haslo');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Powtorzone hasla sie nie zgadzaja");
    } else {
        setSuccess(password2);
    }

    if (descriptionValue === '') {
        setError(description, 'Minimum 20 znaków');
    } else if (descriptionValue.length < 20) {
        setError(description, "Wpisz ponownie")
    } else {
        setSuccess(description);
    }
};