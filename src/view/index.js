import $ from '../util/index.js';
import TodoInput from '../model/TodoInput.js';
import TodoList from '../model/TodoList.js';

export default class TodoView {
  constructor(target) {
    this.target = $(target);
    this.input = new TodoInput('.new-todo');
    this.list = new TodoList('.todo-list');
  }
}
