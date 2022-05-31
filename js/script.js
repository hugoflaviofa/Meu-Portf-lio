const hanburguerButton = document.querySelector('#hamburguer-button');
const navOptions = document.querySelectorAll('.containner-options p');
// const navContainner = document.querySelector('.nav-containner');
const addNav = document.querySelector('#add-nav');

hanburguerButton.addEventListener('click', () => {
  addNav.classList.toggle('add-nav-click');
  if (addNav.classList.contains('add-nav-click')) {
    navOptions.forEach((valueArr) => {
      let testeCreat = valueArr.cloneNode(true);
      addNav.appendChild(testeCreat);
      console.log(valueArr.innerHTML);
    });
  } else {
    while (addNav.hasChildNodes()) {
      addNav.removeChild(addNav.firstChild);
    }
  }
})