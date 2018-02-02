jest.dontMock('Components/about.jsx');

import React from 'react';
import { shallow } from 'enzyme';
import {About} from 'Components/about.jsx';

   
describe('Components/about', () => {
  const props = {
    name: "Zora"
  }

  const wrapper = shallow(<About {...props}/>);

  it("should render 'ABOUT' title", () => {
    expect(wrapper.find('h3').text()).toEqual('ABOUT');
  })

  it("should render passed name", () => {
    expect(wrapper.find('h4').text()).toEqual(props.name);
  })

});
