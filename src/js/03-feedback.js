import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener("input", throttle(onInputData, 500));
formEl.addEventListener("submit", onSubmit);

const input = formEl.email;
const texteria = formEl.message;
const STORAGE_KEY = 'feedback-form-state';
let formElements = {};
dataLocalStorage();

function onInputData(event) {
// const userData = {
//   email: input.value.trim(),
//   message: texteria.value.trim(),
// }

formElements[event.target.name] = event.target.value
localStorage.setItem('STORAGE_KEY', JSON.stringify(formElements));

};

function onSubmit(event) {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements;
 const dataForm = {
        email: email.value,
        message: message.value,
    };
  if (email.value === '' || message.value === '') {
   alert(`Please fill in all the fields!`);
 return formEl;
  }
  
  console.log(dataForm);
  localStorage.removeItem('STORAGE_KEY');
   formEl.reset();

}


function dataLocalStorage() {
  if (JSON.parse(localStorage.getItem('STORAGE_KEY'))) {
    input.value = JSON.parse(localStorage.getItem('STORAGE_KEY')).email;
    texteria.value = JSON.parse(localStorage.getItem('STORAGE_KEY')).message;
  }
}


