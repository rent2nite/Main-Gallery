import React from 'react';
import { shallow } from 'enzyme';

import Carousel from '../client/src/Carousel.jsx';


describe('<Carousel /> unit test', () => {
  it('renders App component', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper).toExist();
  });

});

// Additional tests will be added
