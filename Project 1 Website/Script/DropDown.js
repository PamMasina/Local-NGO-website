/*JavaScript to switch the dropdown menu*/
let dropdownButton = document.querySelector('.dropdown-button');
let dropdown = document.querySelector('.dropdown');

dropdownButton.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});

/* JavaScript to close the dropdown when the X button is clicked*/
let closeDropdownButton = document.querySelector('.close-dropdown');

closeDropdownButton.addEventListener('click', () => {
  dropdown.classList.remove('active');
});