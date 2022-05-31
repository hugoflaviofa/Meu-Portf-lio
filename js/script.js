const hanburguerButton = document.querySelector('#hamburguer-button');
const navOptions = document.querySelector('.containner-options');

hanburguerButton.addEventListener('click', () => {
  navOptions.classList.toggle('active')

})