import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/App.jsx';


describe('<App /> unit test', () => {
  it('renders App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
});

// Additional Tests will be added