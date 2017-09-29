import { SeattleSciFiBookClubPage } from './app.po';

describe('seattle-sci-fi-book-club App', () => {
  let page: SeattleSciFiBookClubPage;

  beforeEach(() => {
    page = new SeattleSciFiBookClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
