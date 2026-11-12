'use strict';

// const { lazy } = require("react");

// write code here
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

inputs.forEach((input) =>  {
   const label = document.createElement('label');
   label.classList.add('field-label');
   label.setAttribute('for', input.id);
   label.textContent = input.name;

const name = input.name;
const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
input.placeholder = capitalizedName;
input.parentElement.append(label);
});
