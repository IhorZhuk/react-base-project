jest.dontMock('../../../src/app/components/about.jsx');

import React from 'react';
import TestUtils from 'react-dom/test-utils';
import {About} from 'Components/about.jsx';

   
describe('Components/about', () => {
  const props = {
    name: "Zora"
  }
  const about = TestUtils.renderIntoDocument(<About {...props}/>);

  it("should render 'ABOUT' title", () => {
    const title = TestUtils.findRenderedDOMComponentWithTag(about,'h3');
    expect(title.textContent).toEqual('ABOUT')
  })

  it("should render passed name", () => {
    const name = TestUtils.findRenderedDOMComponentWithTag(about,'h4');
    expect(name.textContent).toEqual(props.name)
  })

});
