import React from 'react';
import { shallow } from 'enzyme';
import Services from 'components\Services.js';

describe('<Services />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Services />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "services-component"', function () {
      expect(component.hasClass('services-component')).to.equal(true);
    });
  });
});
