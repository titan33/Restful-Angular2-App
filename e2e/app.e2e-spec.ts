import { RestfulAngular2AppPage } from './app.po';

describe('restful-angular2-app App', () => {
  let page: RestfulAngular2AppPage;

  beforeEach(() => {
    page = new RestfulAngular2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
