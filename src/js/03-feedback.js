import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

formEl.addEventListener("input", throttle(onInputData, 500));
formEl.addEventListener("submit", onSubmit);

let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
const { email, message } = formEl.elements;
reloadPage();

function onInputData(event) {
 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));

      
}
function onSubmit(event) {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements;
  dataForm = {
        email: email.value,
        message: message.value,
    };

  console.log(dataForm);

  if (email.value === '' || message.value === '') {
    return alert(`Please fill in all the fields!`);
  }

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
 
}
function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}



