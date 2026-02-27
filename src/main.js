import { nanoid } from 'nanoid';

import { refs } from './js/refs';
import { createMarkup, createMarkupList } from './js/render-tasks';
import iziToast from 'izitoast';
import { manageChangeBtn } from './js/theme-switcher';

const KEY_OBJ = 'taskLists';
const array = JSON.parse(localStorage.getItem(KEY_OBJ)) ?? [];

refs.list.insertAdjacentHTML('beforeend', createMarkupList(array));

refs.form.addEventListener('submit', handleSubmit);
refs.list.addEventListener('click', handleClick);

function handleSubmit(event) {
  event.preventDefault();

  const task = event.target.elements.taskName.value;
  const description = event.target.elements.taskDescription.value;

  const obj = { task, description, id: nanoid() };

  if (!task || !description) {
    iziToast.error({
      title: 'error',
      message: 'Fill all fields',
      position: 'topCenter',
    });
    return;
  }

  refs.list.insertAdjacentHTML('beforeend', createMarkup(obj));

  refs.form.reset();
  array.push(obj);
  localStorage.setItem(KEY_OBJ, JSON.stringify(array));
}

function handleClick(event) {
  if (!event.target.classList.contains('task-list-item-btn')) return;

  const findLi = event.target.closest('[data-id]');
  const id = findLi.dataset.id;
  // console.log(id);

  const newArr = array.filter(item => item.id !== id);

  array.length = 0;
  array.push(...newArr);

  localStorage.setItem(KEY_OBJ, JSON.stringify(array));

  findLi.remove();
}
