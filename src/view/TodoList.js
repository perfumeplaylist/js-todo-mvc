import $ from '../util/index.js';

// className과 classList의 차이점에 대해서 분석

export default class TodoList {
  constructor(target) {
    this.target = $(target);
  }

  render(data) {
    this.target.innerHTML = '';
    const fragment = document.createDocumentFragment();
    // jsx 문법의 필요성 -> 가독성이 떨어진다.
    data.forEach((todo) => {
      const li = document.createElement('li');
      const div = document.createElement('div');
      const checkbox = document.createElement('input');
      const label = document.createElement('label');
      const button = document.createElement('button');
      li.dataset.index = todo.id;
      div.className = 'view';
      checkbox.className = 'toggle';
      checkbox.type = 'checkbox';
      checkbox.checked = todo.state === 'completed';
      label.className = 'label';
      label.textContent = todo.content;
      button.className = 'destroy';
      if (todo.state === 'edit') {
        li.className = 'editing';
        const input = document.createElement('input');
        input.className = todo.state;
        input.value = todo.content;
        div.append(checkbox, label, button);
        li.append(div, input);
      } else {
        li.classList.add(todo.state);
        div.append(checkbox, label, button);
        li.append(div);
      }
      fragment.append(li);
    });
    this.target.append(fragment);
  }

  bindEvent({ clickHandler, dbClickHandler, keydownHandler }) {
    this.target.addEventListener('click', (event) => {
      const { target } = event;
      const {
        dataset: { index },
        className,
      } = target.closest('li');
      if (target.className === 'toggle') {
        const state = className === 'completed' ? false : 'completed';
        clickHandler.toggle(index, { state });
      } else if (target.className === 'destroy') {
        clickHandler.remove(index);
      }
    });

    this.target.addEventListener('dblclick', (event) => {
      const { target } = event;
      const { index } = target.closest('li').dataset;
      // 이러면 model의 정보를 안다고 생각
      // view단에서 이벤트 선언시,view에 해당하는 정보만 전달해야된다고 생각.
      dbClickHandler(index, { state: 'edit' });
    });

    this.target.addEventListener('keyup', (event) => {
      const { target, key } = event;
      const { index } = target.closest('li').dataset;
      if (target.className === 'edit') {
        switch (key) {
          case 'Escape': {
            // 활성화 되어있는게 많이 있다면 위험하다.즉,범위를 좁혀서 해야한다.
            keydownHandler(index, { state: false });
            break;
          }
          case 'Enter': {
            const { value } = target;
            keydownHandler(index, { state: false, content: value });
            break;
          }
          default: {
            break;
          }
        }
      }
    });
  }
}
