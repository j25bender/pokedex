import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App test', () => {

  it('should render without blowing up (and match snapshot)', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })
})