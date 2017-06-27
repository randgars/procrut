import React from 'react';
import { shallow } from 'enzyme';
import Photogallery from 'components\Photogallery.js';

describe('<Photogallery />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Photogallery />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "photogallery-component"', function () {
      expect(component.hasClass('photogallery-component')).to.equal(true);
    });
  });
});
