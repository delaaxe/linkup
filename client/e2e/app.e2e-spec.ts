import { LinkupPage } from './app.po';

describe('linkup App', () => {
  let page: LinkupPage;

  beforeEach(() => {
    page = new LinkupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
