jest.dontMock('../../../src/app/components/about.jsx');

var React = require('react');
var TestUtils = require('react-dom/test-utils');
var About = require('../../../src/app/components/about.jsx').default;

   
describe("components/about", function() {

  var about = TestUtils.renderIntoDocument(<About/>);

  it("should render 'ABOUT' title", function() {
    var title = TestUtils.findRenderedDOMComponentWithTag(about,'h3');
    expect(title.textContent).toEqual('ABOUT')
  });


});