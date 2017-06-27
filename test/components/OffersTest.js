import React from 'react';
import { shallow } from 'enzyme';
import Offers from 'components\Offers.js';

describe('<Offers />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Offers />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "offers-component"', function () {
      expect(component.hasClass('offers-component')).to.equal(true);
    });
  });
});
