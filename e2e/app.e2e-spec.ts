import { AngularAuth0Page } from './app.po';

describe('angular-auth0 App', function() {
  let page: AngularAuth0Page;

  beforeEach(() => {
    page = new AngularAuth0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
