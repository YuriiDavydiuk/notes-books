export function createMarkup({ task, description, id }) {
  return `<li class="task-list-item" data-id=${id}>
        <button class="task-list-item-btn">Delete</button>
        <h3>${task}</h3>
        <p>${description}</p>
      </li>`;
}

export function createMarkupList(arr) {
  return arr.map(createMarkup).join('');
}

