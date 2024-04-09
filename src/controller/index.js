export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.input.bindEvent({
      inputHandler: this.add.bind(this),
    });
    this.view.list.bindEvent({
      clickHandler: {
        toggle: this.edit.bind(this),
        remove: this.remove.bind(this),
      },
      dbClickHandler: this.edit.bind(this),
      keydownHandler: this.edit.bind(this),
    });
    this.view.filter.bindEvent({
      clickHandler: this.changeView.bind(this),
    });
  }

  add(todo) {
    this.model.add(todo);
    this.view.list.render(this.model.todos);
    this.view.count.render(this.model.state.count);
  }

  edit(id, state) {
    this.model.edit(Number(id), state);
    this.view.list.render(this.model.todos);
  }

  remove(id) {
    this.model.remove(Number(id));
    this.view.list.render(this.model.todos);
    this.view.count.render(this.model.state.count);
  }

  changeView(state) {
    const filterTodo = this.model.todos.filter((todo) => todo.state === state);
    this.model.changeView(state);
    this.view.list.render(state === 'all' ? this.model.todos : filterTodo);
    this.view.filter.render(this.model.state.viewState);
  }
}
