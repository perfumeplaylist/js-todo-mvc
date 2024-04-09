import $ from '../util/index.js';

export default class TodoCount {
  constructor(target) {
    this.target = $(target);
  }

  render(data = 0) {
    this.target.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const strong = document.createElement('strong');
    strong.textContent = data;
    fragment.append(strong);
    this.target.append('총 ', fragment, '개');
  }
}
