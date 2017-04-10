import { BlogSiteWebPage } from './app.po';

describe('blog-site-web App', () => {
  let page: BlogSiteWebPage;

  beforeEach(() => {
    page = new BlogSiteWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
