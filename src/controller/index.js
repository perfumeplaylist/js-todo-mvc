export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  add(todo) {
    this.model.add(todo);
    this.view.render({ todos: this.model.todos, state: this.model.state });
  }

  edit(newTodo) {
    this.model.edit(newTodo);
    this.view.render({ todos: this.model.todos, state: this.model.state });
  }

  remove(tempTodo) {
    this.model.remove(tempTodo);
    this.view.render({ todos: this.model.todos, state: this.model.state });
  }

  changeView(state) {
    this.model.changeView(state);
    this.view.render({ todos: this.model.todos, state: this.model.state });
  }
}
