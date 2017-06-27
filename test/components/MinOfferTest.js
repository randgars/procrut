import React from 'react';
import { shallow } from 'enzyme';
import MinOffer from 'components\MinOffer.js';

describe('<MinOffer />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<MinOffer />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "minoffer-component"', function () {
      expect(component.hasClass('minoffer-component')).to.equal(true);
    });
  });
});
