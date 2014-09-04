'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('squashLadder', function() {

  browser.get('index.html');

  it('should automatically redirect to /rankings when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/rankings");
  });


  describe('rankings', function() {

    beforeEach(function() {
      browser.get('index.html#/rankings');
    });


    it('should render rankings when user navigates to /rankings', function() {
      expect(element.all(by.css('[ng-view] li')).first().getText()).toMatch(/John/);
      expect(element.all(by.css('[ng-view] li')).get(1).getText()).toMatch(/Fred/);
    });

  });
});
