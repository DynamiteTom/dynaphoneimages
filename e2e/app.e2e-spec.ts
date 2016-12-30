import { TodoApp291216Page } from './app.po';

describe('todo-app291216 App', function() {
  let page: TodoApp291216Page;

  beforeEach(() => {
    page = new TodoApp291216Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
