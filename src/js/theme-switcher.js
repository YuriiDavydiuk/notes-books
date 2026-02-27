import { refs } from './refs';

refs.changeBtm.addEventListener('click', manageChangeBtn);

export function manageChangeBtn() {
  if (document.body.classList.contains('theme-light')) {
    document.body.classList.remove('theme-light');
    console.log(1);

    document.body.classList.add('theme-dark');
  } else {
    document.body.classList.add('theme-light');
    document.body.classList.remove('theme-dark');
  }
}
