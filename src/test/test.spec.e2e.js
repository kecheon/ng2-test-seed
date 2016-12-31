describe('Protractor Demo App', function() {
  it('should have a title', function() {
// Angular app이 아닌 경우 이걸 넣어주야 한다.
	// browser.ignoreSynchronization = true;

    browser.get('http://localhost:9090/built/');
    expect(browser.getTitle()).toEqual('입찰정보시스템 by InnoG2B');
  });
});