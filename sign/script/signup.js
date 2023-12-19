import {
  formElement,
  emailInput,
  passwordInput,
  passwordRepeatInput,
  emailErrorText,
  passwordErrorText,
  passwordRepeatErrorText,
  passwordVisibilityIcon,
  passwordRepeatVisibilityIcon,
  isValidEmail,
  isValidPassword,
  isValidPasswordRepeat,
  handleSignUpEmailInputFocusout,
  handlePasswordInputFocusout,
  handlePasswordRepeatInputFocusout,
  handlePasswordVisibilityIconClick,
} from './common.js';

// submit 에러 확인
function handleSignUpFormSubmit(e) {
  e.preventDefault();

  // 에러 메세지 초기화
  emailInput.classList.remove('error-border');
  passwordInput.classList.remove('error-border');
  passwordRepeatInput.classList.remove('error-border');
  emailErrorText.textContent = '';
  passwordErrorText.textContent = '';
  passwordRepeatErrorText.textContent = '';

  // 에러 발생 확인 및 처리
  if (isValidEmail && isValidPassword && isValidPasswordRepeat) {
    formElement.submit();
  } else {
    if (!isValidEmail) {
      emailInput.classList.add('error-border');
      emailErrorText.textContent = '이메일을 확인해 주세요.';
    }
    if (!isValidPassword) {
      passwordInput.classList.add('error-border');
      passwordErrorText.textContent = '비밀번호를 확인해 주세요.';
    }
    if (!isValidPasswordRepeat) {
      passwordRepeatInput.classList.add('error-border');
      passwordRepeatErrorText.textContent = '비밀번호를 다시 확인해 주세요.';
    }
  }
}

emailInput.addEventListener('focusout', handleSignUpEmailInputFocusout);
passwordInput.addEventListener('focusout', handlePasswordInputFocusout);
passwordRepeatInput.addEventListener('focusout', handlePasswordRepeatInputFocusout);
formElement.addEventListener('submit', handleSignUpFormSubmit);
passwordVisibilityIcon.addEventListener('click', handlePasswordVisibilityIconClick);
passwordRepeatVisibilityIcon.addEventListener('click', handlePasswordVisibilityIconClick);
