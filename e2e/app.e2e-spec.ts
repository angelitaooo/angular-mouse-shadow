import { AngularMouseShadowPage } from './app.po';

describe('angular-mouse-shadow App', () => {
  let page: AngularMouseShadowPage;

  beforeEach(() => {
    page = new AngularMouseShadowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
