import $ from '../util/index.js';

export default class TodoInput {
  constructor(target) {
    this.target = $(target);
  }

  render() {
    this.target.value = '';
  }

  bindEvent({ inputHandler }) {
    this.target.addEventListener('keydown', (event) => {
      const { key, target } = event;
      if (key === 'Enter') {
        inputHandler(target.value);
        this.render();
      }
    });
  }
}
