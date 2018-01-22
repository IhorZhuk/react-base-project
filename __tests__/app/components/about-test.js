jest.dontMock('../../../src/app/components/about.jsx');
jest.dontMock('../../../src/app/controlers/nameDays.js');

import React from 'react';
import TestUtils from 'react-dom/test-utils';
import About from '../../../src/app/components/about.jsx';
import namesAPI from '../../../src/app/controlers/nameDays.js';

   
describe('components/about', () => {

  const about = TestUtils.renderIntoDocument(<About/>);

  it("should render 'ABOUT' title", () => {
    const title = TestUtils.findRenderedDOMComponentWithTag(about,'h3');
    expect(title.textContent).toEqual('ABOUT')
  })

});
