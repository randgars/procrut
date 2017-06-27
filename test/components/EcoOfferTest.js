import React from 'react';
import { shallow } from 'enzyme';
import EcoOffer from 'components\EcoOffer.js';

describe('<EcoOffer />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<EcoOffer />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "ecooffer-component"', function () {
      expect(component.hasClass('ecooffer-component')).to.equal(true);
    });
  });
});
