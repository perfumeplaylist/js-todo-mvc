import $ from '../util/index.js';

export default class TodoInput {
  constructor(target) {
    this.target = $(target);
  }

  render() {
    this.target.value = '';
  }

  bindEvent({ inputHandler }) {
    this.target.addEventListener('keyup', (event) => {
      const {
        key,
        target: { value },
      } = event;
      if (value === '') return;
      if (key === 'Enter') {
        inputHandler(value);
        this.render();
      }
    });
  }
}
