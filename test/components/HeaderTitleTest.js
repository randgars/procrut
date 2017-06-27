import React from 'react';
import { shallow } from 'enzyme';
import HeaderTitle from 'components\HeaderTitle.js';

describe('<HeaderTitle />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<HeaderTitle />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "headertitle-component"', function () {
      expect(component.hasClass('headertitle-component')).to.equal(true);
    });
  });
});
