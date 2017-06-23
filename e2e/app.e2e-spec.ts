import { TechRadarUiPage } from './app.po';

describe('tech-radar-ui App', () => {
  let page: TechRadarUiPage;

  beforeEach(() => {
    page = new TechRadarUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
