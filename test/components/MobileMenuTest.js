import React from 'react';
import { shallow } from 'enzyme';
import MobileMenu from 'components\MobileMenu.js';

describe('<MobileMenu />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<MobileMenu />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "mobilemenu-component"', function () {
      expect(component.hasClass('mobilemenu-component')).to.equal(true);
    });
  });
});
