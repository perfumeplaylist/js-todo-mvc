import $ from '../util/index.js';

export default class TodoView {
  constructor(target) {
    this.target = $(target);
    this.toggle = $('.toggle-all');
    this.list = $('.todo-list');
    this.countContainer = $('.count-container');
    this.count = $('.todo-count');
    this.viewState = {
      all: $('.all'),
      active: $('.active'),
      completed: $('.completed'),
    };
  }

  render(data) {
    this.target.innerHTML = '';

    const fragment = document.createDocumentFragment();

    data.todos.forEach((todo) => {
      const li = document.createElement('li');
      const label = document.createElement('label');
      const btn = document.createElement('button');
      const checkBox = document.createElement('input');
      li.dataset.index = todo.id;
      li.className = `todo-item ${todo.state === 'completed' ? 'completed' : 'false'}`;
      label.textContent = todo.content;
      label.className = 'label';
      checkBox.type = 'checkbox';
      checkBox.className = 'toggle';
      checkBox.checked = todo.state === 'completed';
      li.append(checkBox);
      li.append(label);
      li.append(btn);
      this.list.append(li);
    });

    this.count.innerHTML = `총 <strong>${data.state.count}</strong> 개`;

    Object.values(this.viewState).forEach((element) => {
      element.classList.remove('selected');
    });
    this.viewState[data.state.viewState].classList.add('selected');

    this.countContainer.append(this.count);
    fragment.append(this.list, this.countContainer);
    this.target.append(fragment);
  }

  // 이벤트 버블링을 이용해서 이벤트 할당
}
