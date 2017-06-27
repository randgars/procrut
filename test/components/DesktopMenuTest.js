import React from 'react';
import { shallow } from 'enzyme';
import DesktopMenu from 'components\DesktopMenu.js';

describe('<DesktopMenu />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<DesktopMenu />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "desktopmenu-component"', function () {
      expect(component.hasClass('desktopmenu-component')).to.equal(true);
    });
  });
});
