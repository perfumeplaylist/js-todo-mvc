import $ from '../util/index.js';

export default class TodoCount {
  constructor(target) {
    this.target = $(target);
  }

  render(data = 0) {
    this.target.innerHTML = `총 <strong>${data}</strong> 개`;
  }
}
