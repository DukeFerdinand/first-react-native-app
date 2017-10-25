import React from 'react';
import Signup from './../components/Signup';

import renderer from 'react-test-renderer';

describe('Signup View', () => {
  it('renders without crashing', () => {
    const navigation = {
      //Fake method
      navigate(string, obj) {
        return [string, obj];
      }
    }
    const rendered = renderer.create(<Signup navigation={navigation} />).toJSON();
    expect(rendered).toBeTruthy();
  });
});