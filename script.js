//MENU-OPEN
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.body.classList.toggle('menu-open');
  });

document.querySelector('.filter').addEventListener('click', function() {
  document.body.classList.toggle('filter-open');
});

//FILTER
const rangeInputs = document.querySelectorAll('input[type="range"]');
    rangeInputs.forEach(input => {
      input.addEventListener('input', function() {
        const valueSpan = this.nextElementSibling;
        valueSpan.textContent = this.value;
      });
    });