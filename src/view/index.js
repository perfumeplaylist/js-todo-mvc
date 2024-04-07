import $ from '../util/index.js';
import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';

export default class TodoView {
  constructor(target) {
    this.target = $(target);
    this.input = new TodoInput('.new-todo');
    this.list = new TodoList('.todo-list');
  }
}
