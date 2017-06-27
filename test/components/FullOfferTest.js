import React from 'react';
import { shallow } from 'enzyme';
import FullOffer from 'components\FullOffer.js';

describe('<FullOffer />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<FullOffer />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "fulloffer-component"', function () {
      expect(component.hasClass('fulloffer-component')).to.equal(true);
    });
  });
});
