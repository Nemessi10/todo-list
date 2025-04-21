// Функція для "нормального" блюру, бо комусь не нравиться моя творчість :(

const loginContainer = document.querySelector('.login-container');
const registerContainer = document.querySelector('.register-container');
const loginPointer = document.querySelector('.login-pointer');
const registerPointer = document.querySelector('.register-pointer');

loginContainer.addEventListener('click', () => {
    loginContainer.classList.toggle('active');
    loginPointer.classList.toggle('active');
});

registerContainer.addEventListener('click', () => {
    registerContainer.classList.toggle('active');
    registerPointer.classList.toggle('active');
});
/**********************************************************************/
// Функція для зміни теми
const themeToggle = document.querySelector('#theme-icon');

let isDarkTheme = false;

function toggleTheme() {
  if (isDarkTheme) {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    themeToggle.src = 'icons/sun.svg';
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    themeToggle.src = 'icons/moon-star.svg';
  }

  isDarkTheme = !isDarkTheme;
}


themeToggle.addEventListener('click', toggleTheme);
/**********************************************************************/
// Функції для навігації по мобільному поданню
document.querySelector('.register-link').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('.login-container').classList.add('hidden');
  document.querySelector('.register-container').classList.remove('hidden');
});

document.querySelector('.login-link').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('.register-container').classList.add('hidden');
  document.querySelector('.login-container').classList.remove('hidden');
});

/**********************************************************************/
//Функція зміни мови
const translations = {
  en: {
    login_title: "Login",
    login_name_placeholder: "Enter your name",
    login_password_placeholder: "Enter your password",
    register_title: "Register",
    register_name_placeholder: "Enter your name",
    register_email_placeholder: "Enter your email",
    register_password_placeholder: "Enter your password",
    register_password_confirm_placeholder: "Repeat the password",
    login_button: "Login",
    register_button: "Register",
    login_link: "Have you been here before? Login->",
    register_link: "First time here? Register->",
    login_pointer: "←Login",
    register_pointer: "Registration→"
  },
  uk: {
    login_title: "Увійти",
    login_name_placeholder: "Введіть ім’я",
    login_password_placeholder: "Введіть пароль",
    register_title: "Реєстрація",
    register_name_placeholder: "Введіть ім’я",
    register_email_placeholder: "Введіть електронну пошту",
    register_password_placeholder: "Введіть пароль",
    register_password_confirm_placeholder: "Повторіть пароль",
    login_button: "Увійти",
    register_button: "Зареєструватися",
    login_link: "Вже маєте акаунт? Увійти->",
    register_link: "Вперше тут? Зареєструватися->",
    login_pointer: "←Логін",
    register_pointer: "Реєстрація→"
  }
};

const langToggle = document.querySelector('#language-icon');
let currentLang = 'en'; // або 'uk'

function switchLanguage() {
  currentLang = currentLang === 'en' ? 'uk' : 'en';
  document.body.classList.remove('en', 'uk');
  document.body.classList.add(currentLang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang][key]) {
      el.placeholder = translations[currentLang][key];
    }
  });
  
  document.querySelectorAll('button').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
}

langToggle.addEventListener('click', switchLanguage);

/**********************************************************************/

// Функції для перевірки валідності форм
function validateLoginForm() {
  const loginNameInput = document.getElementById('login-name');
  const loginPasswordInput = document.getElementById('login-password');

  if (loginNameInput.value.trim() === '') {
    alert('Будь ласка, введіть ваше ім\'я.');
    return false;
  }

  if (loginPasswordInput.value.trim() === '') {
    alert('Будь ласка, введіть ваш пароль.');
    return false;
  }

  return true;
}

function validateRegisterForm() {
  const registerNameInput = document.getElementById('register-name');
  const registerEmailInput = document.getElementById('register-email');
  const registerPasswordInput = document.getElementById('register-password');
  const registerPasswordConfirmInput = document.getElementById('register-password-confirm');

  if (registerNameInput.value.trim() === '') {
    alert('Будь ласка, введіть ваше ім\'я.');
    return false;
  }
  if (!/^[a-z]+$/.test(registerNameInput.value.trim())) {
    alert("Ім'я може містити лише малі літери без пробілів.");
    return false;
  }

  if (registerEmailInput.value.trim() === '') {
    alert('Будь ласка, введіть вашу електронну пошту.');
    return false;
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(registerEmailInput.value.trim())) {
    alert('Будь ласка, введіть коректну електронну пошту.');
    return false;
  }

  if (registerPasswordInput.value.trim() === '') {
    alert('Будь ласка, введіть ваш пароль.');
    return false;
  }
  if (registerPasswordInput.value.trim().length < 8) {
    alert('Пароль повинен містити мінімум 8 символів.');
    return false;
  }
  if (!/[A-Z]/.test(registerPasswordInput.value.trim()) || !/[a-z]/.test(registerPasswordInput.value.trim()) || !/\d/.test(registerPasswordInput.value.trim()) || !/[!@#$%^&*(),.?":{}|<>]/.test(registerPasswordInput.value.trim())) {
    alert('Пароль повинен містити великі та малі літери, цифри та спеціальні символи.');
    return false;
  }

  if (registerPasswordInput.value.trim() !== registerPasswordConfirmInput.value.trim()) {
    alert('Паролі не співпадають. Будь ласка, введіть повторно.');
    return false;
  }

  return true;
}

document.querySelector('.login-container form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateLoginForm()) {
    console.log('Форма входу успішно пройшла перевірку.');

    localStorage.setItem('loginName', document.getElementById('login-name').value);
    localStorage.setItem('loginPassword', document.getElementById('login-password').value);

    window.location.href = 'hello.html'; // не забути потім це замінити
  }
});

document.querySelector('.register-container form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateRegisterForm()) {
    console.log('Форма реєстрації успішно пройшла перевірку.');

    // Зберігаємо дані реєстрації в localStorage (поки не прикрутим це до апішок та бд)
    localStorage.setItem('registerName', document.getElementById('register-name').value);
    localStorage.setItem('registerEmail', document.getElementById('register-email').value);
    localStorage.setItem('registerPassword', document.getElementById('register-password').value);

    window.location.href = 'hello.html'; //тут також не заюути замінити
  }
});
