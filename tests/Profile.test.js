import React from 'react';
import Profile from './../components/Profile';

import renderer from 'react-test-renderer';

describe('Profile Component', () => {
  it('renders without crashing', () => {
    //Profile depended on some state passed in via props, so I made this work
    let navigation = {
      state: {
        params: {
          username: 'Doug'
        },
        routeName: "Profile",
      },
    }
    const rendered = renderer.create(<Profile navigation={navigation} />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
