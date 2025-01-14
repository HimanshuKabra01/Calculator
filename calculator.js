let initial = '';

document.querySelector('.js-calcula')
  .innerHTML = localStorage.getItem('initial');

function updateCalculation(value) {
  initial += value
  document.querySelector('.js-calcula')
    .innerHTML = initial
  localStorage.setItem('initial', initial);
}