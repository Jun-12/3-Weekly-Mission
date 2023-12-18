import {
  formElement,
  emailInput,
  passwordInput,
  passwordRepeatInput,
  emailError,
  passwordError,
  passwordRepeatError,
  passwordVisibilityIcon,
  passwordRepeatVisibilityIcon,
  isValidEmail,
  isValidPassword,
  isValidPasswordRepeat,
  validateSignUpEmail,
  validatePassword,
  validatePasswordRepeat,
  togglePasswordVisibility,
} from './common.js';

// input focusout 에러 확인
function checkError(e) {
  switch (e.target) {
    case emailInput:
      validateSignUpEmail();
      break;
    case passwordInput:
      validatePassword();
      break;
    case passwordRepeatInput:
      validatePasswordRepeat();
      break;
    default:
      break;
  }
}

// submit 에러 확인
function checkSubmitError(e) {
  e.preventDefault();

  // 에러 메세지 초기화
  emailInput.classList.remove('error-border');
  passwordInput.classList.remove('error-border');
  passwordRepeatInput.classList.remove('error-border');
  emailError.textContent = '';
  passwordError.textContent = '';
  passwordRepeatError.textContent = '';

  // 에러 발생 확인 및 처리
  if (isValidEmail && isValidPassword && isValidPasswordRepeat) {
    formElement.action = '/folder.html';
    formElement.method = 'POST';
    formElement.submit();
  } else {
    if (!isValidEmail) {
      emailInput.classList.add('error-border');
      emailError.textContent = '이메일을 확인해 주세요.';
    }
    if (!isValidPassword) {
      passwordInput.classList.add('error-border');
      passwordError.textContent = '비밀번호를 확인해 주세요.';
    }
    if (!isValidPasswordRepeat) {
      passwordRepeatInput.classList.add('error-border');
      passwordRepeatError.textContent = '비밀번호를 다시 확인해 주세요.';
    }
  }
}

emailInput.addEventListener('focusout', checkError);
passwordInput.addEventListener('focusout', checkError);
passwordRepeatInput.addEventListener('focusout', checkError);
formElement.addEventListener('submit', checkSubmitError);
passwordVisibilityIcon.addEventListener('click', () => {
  togglePasswordVisibility(passwordVisibilityIcon, passwordInput);
});
passwordRepeatVisibilityIcon.addEventListener('click', () => {
  togglePasswordVisibility(passwordRepeatVisibilityIcon, passwordRepeatInput);
});
