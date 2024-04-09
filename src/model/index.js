export default class ToDoModel {
  constructor() {
    this.todos = [];
    this.state = {
      viewState: 'all',
      count: this.todos.length,
    };
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  add(value) {
    const todo = {
      id: Date.now(),
      content: value,
      state: 'active',
    };
    this.todos = [...this.todos, { ...todo }];
    this.setState({ count: this.todos.length });
  }

  edit(id, state) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === Number(id)) return { ...todo, ...state };
      return todo;
    });
  }

  remove(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.setState({ count: this.todos.length });
  }

  changeView(state) {
    this.setState({ viewState: state });
  }
}
