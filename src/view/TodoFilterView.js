import $ from '../util/index.js';

export default class TodoFilterView {
  constructor(target) {
    this.target = $(target);
  }

  render(viewState = 'all') {
    this.target.innerHTML = '';
    // selected 클래스명 삭제 후 다시 할당
    const fragment = document.createDocumentFragment();
    const classState = [
      { content: '전체보기', className: 'all' },
      { content: '해야할 일', className: 'active' },
      { content: '완료한 일', className: 'completed' },
    ];
    classState.forEach(({ content, className }) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.className = `${className} ${viewState === className ? 'selected' : ''}`;
      a.href = `#${className === 'all' ? '' : className}`;
      a.textContent = content;
      li.append(a);
      fragment.append(li);
    });
    this.target.append(fragment);
  }

  bindEvent({ clickHandler }) {
    this.target.addEventListener('click', (event) => {
      const {
        target: { className },
      } = event;
      clickHandler(className.split(' ')[0]);
    });
  }
}
