import { AppPage } from './app.po';

describe('pass-data-from-parent-to-child-by-input-with-getter-setter App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
