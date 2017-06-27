import React from 'react';
import { shallow } from 'enzyme';
import AboutUs from 'components\AboutUs.js';

describe('<AboutUs />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<AboutUs />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "aboutus-component"', function () {
      expect(component.hasClass('aboutus-component')).to.equal(true);
    });
  });
});
