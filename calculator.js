let initial = localStorage.getItem('initial') || '';

if (!initial) {
  document.querySelector('.js-calcula')
    .innerHTML = '';
} else {
  document.querySelector('.js-calcula')
    .innerHTML = initial;
}

function updateCalculation(value) {
  initial += value
  document.querySelector('.js-calcula')
    .innerHTML = initial
  localStorage.setItem('initial', initial);
}
