// Name Field: Add focus to name section
const userName = document.getElementById('name');
userName.focus();

//Job Role: hide the text field to display 'other job role'
const jobRole = document.getElementById('title');
const otherJob = document.getElementById('other-job-role');
otherJob.style.display = 'none';

//Listens to display or hide the text field 
jobRole.addEventListener('change', (e) => {
    let targetValue = e.target.value;
    if (targetValue === 'other') {
        otherJob.style.display = 'block';
    } else {
        otherJob.style.display = 'none';
    }
});

//T-Shirt: display designs that are available depending on the user's selection
const design = document.getElementById('design');
const color = document.getElementById('color');
let colorOptions = color.children;
color.disabled = true;

//Listens to change colors based on the theme selected
design.addEventListener('change', (e) => {
    color.disabled = false;
    for (let i = 0; i < colorOptions.length; i++){
        let targetValue = e.target.value;
        themeAttribute = colorOptions[i].getAttribute('data-theme');

        if (targetValue === themeAttribute) {
            colorOptions[i].selected = true;
            colorOptions[i].hidden = false;
        } else {
            colorOptions[i].selected = false;
            colorOptions[i].hidden = true;
        }

    }
});

//Activities: updates to reflect the total cost selected by the user
const registerActivity = document.getElementById('activities');
let activityTotal = 0;

//Listens to change if a user checks or unchecks activity
registerActivity.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
        const dataCost = parseInt(e.target.getAttribute('data-cost'));

        if (e.target.checked) {
            activityTotal += dataCost;
        } else {
            activityTotal -= dataCost;
        }
        const activityCost = document.getElementById('activities-cost');
        activityCost.innerText = `Total: $${activityTotal}`;

    }

});

//Payment: Correct payment option will be shown based on user's selection
const paymentChoice = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');

payPal.hidden = true;
bitCoin.hidden = true;

//Listens to change the payment selected by the user
paymentChoice.children[1].setAttribute('selected', true);
paymentChoice.addEventListener('change', (e) => {
    if (e.target.value === 'credit-card') {
        creditCard.hidden = false;
        payPal.hidden = true;
        bitCoin.hidden = true;
    } else if (e.target.value === 'paypal') {
        payPal.hidden = false;
        creditCard.hidden = true;
        bitCoin.hidden = true;
    } else if (e.target.value === 'bitcoin'){
        bitCoin.hidden = false;
        creditCard.hidden = true;
        payPal.hidden = true;
    }
});

//Form Validation: the name, email address, activities, and payment should not submit without the correct information
const email = document.getElementById('email');
const cardNum = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    const nameValue = userName.value;
    const nameTest = /^[a-zA-Z]+[ ]?[a-zA-Z]+?$/;
    const validName = nameTest.test(nameValue);
  
    if (validName === false || nameValue === '') {
      e.preventDefault();
      userName.parentElement.classList.add('not-valid');
      userName.parentElement.classList.remove('valid');
      userName.parentElement.lastElementChild.style.display = 'block';
    } else {
      userName.parentElement.classList.add('valid');
      userName.parentElement.classList.remove('not-valid');
      userName.classList.remove('error-border');
      userName.parentElement.lastElementChild.style.display = 'none';
    }
  
    const emailValue = email.value;
    const emailTest = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validEmail = emailTest.test(emailValue);
  
    if (validEmail === false || emailValue === '') {
      e.preventDefault();
      email.parentElement.classList.add('not-valid');
      email.parentElement.classList.remove('valid');
      email.parentElement.lastElementChild.style.display = 'block';
    } else {
      email.parentElement.classList.add('valid');
      email.parentElement.classList.remove('not-valid');
      email.classList.remove('error-border');
      email.parentElement.lastElementChild.style.display = 'none';
    }
  
    if (activityTotal === 0) {
      e.preventDefault();
      registerActivity.parentElement.classList.add('not-valid');
      registerActivity.classList.remove('valid');
      registerActivity.parentElement.lastElementChild.style.display = 'block';
    } else {
      registerActivity.parentElement.classList.add('valid');
      registerActivity.parentElement.classList.remove('not-valid');
      registerActivity.lastElementChild.style.display = 'none';
    }
  
    if ((creditCard.style.display = 'block')) {
      const cardNumValue = cardNum.value;
      const cardNumTest = /^\d{13,16}$/;
      const validCardNum = cardNumTest.test(cardNumValue);
  
      if (validCardNum === false || cardNumValue === '') {
        e.preventDefault();
        cardNum.parentElement.classList.add('not-valid');
        cardNum.parentElement.classList.remove('valid');
        cardNum.parentElement.lastElementChild.style.display = 'block';
      } else {
        cardNum.parentElement.classList.add('valid');
        cardNum.parentElement.classList.remove('not-valid');
        cardNum.classList.remove('error-border');
        cardNum.parentElement.lastElementChild.style.display = 'none';
      }
  
      const zipCodeValue = zipCode.value;
      const zipCodeTest = /^\d{5}$/;
      const validZipCode = zipCodeTest.test(zipCodeValue);
  
      if (validZipCode === false || zipCodeValue === '') {
        e.preventDefault();
        zipCode.parentElement.classList.add('not-valid');
        zipCode.parentElement.classList.remove('valid');
        zipCode.parentElement.lastElementChild.style.display = 'block';
      } else {
        zipCode.parentElement.classList.add('valid');
        zipCode.parentElement.classList.remove('not-valid');
        zipCode.classList.remove('error-border');
        zipCode.parentElement.lastElementChild.style.display = 'none';
      }
  
  
      const cvvValue = cvv.value;
      const cvvTest = /^\d{3}$/;
      const validCVV = cvvTest.test(cvvValue);
  
      if (validCVV === false || cvvValue === '') {
        e.preventDefault();
        cvv.parentElement.classList.add('not-valid');
        cvv.parentElement.classList.remove('valid');
        cvv.parentElement.lastElementChild.style.display = 'block';
      } else {
        cvv.parentElement.classList.add('valid');
        cvv.parentElement.classList.remove('not-valid');
        cvv.classList.remove('error-border');
        cvv.parentElement.lastElementChild.style.display = 'none';
      }
    } else {
      e.preventDefault();
    }
  });
  
  //Accessibility: Calls for the elements to listen for focus and blur events
  const checkBoxInputs = document.querySelectorAll('input[type= "checkbox"]')
 
for (let i=0;i< checkBoxInputs.length; i++) {
    checkBoxInputs[i].addEventListener('focus',(e) =>  {
        parent = checkBoxInputs[i].parentElement;
        parent.classList.add('focus')
    });
    checkBoxInputs[i].addEventListener('blur',(e) => {
        parent = checkBoxInputs[i].parentElement;
        parent.classList.remove('focus')
    });
}