import React from 'react';
import { shallow } from 'enzyme';
import ImageSlider from 'components\ImageSlider.js';

describe('<ImageSlider />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<ImageSlider />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "imageslider-component"', function () {
      expect(component.hasClass('imageslider-component')).to.equal(true);
    });
  });
});
