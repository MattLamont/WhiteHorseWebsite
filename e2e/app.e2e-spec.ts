import { WhiteHorseWebsitePage } from './app.po';

describe('white-horse-website App', () => {
  let page: WhiteHorseWebsitePage;

  beforeEach(() => {
    page = new WhiteHorseWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
