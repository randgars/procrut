import React from 'react';
import { shallow } from 'enzyme';
import Contacts from 'components\Contacts.js';

describe('<Contacts />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Contacts />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "contacts-component"', function () {
      expect(component.hasClass('contacts-component')).to.equal(true);
    });
  });
});
