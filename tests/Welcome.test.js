import React from 'react';
import Welcome from './../components/Welcome';

import renderer from 'react-test-renderer';

describe('Welcome View', () => {
  it('renders without crashing', () => {
    const navigation = {
      //Fake method
      navigate(string, obj) {
        return [string, obj];
      }
    }
    const rendered = renderer.create(<Welcome navigation={navigation} />).toJSON();
    expect(rendered).toBeTruthy();
  });
});