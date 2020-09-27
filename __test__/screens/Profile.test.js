import React from 'react';
import { shallow } from 'enzyme';
import { Button, TouchableOpacity } from 'react-native';
import ProfileScreen from '../../src/screens/Profile';

describe('ProfileScreen', () => {
  const createTestProps = props => ({
    data: {
      family_name: 'Sengayire',
      given_name: 'Prince',
      name: 'Prince Sengayire',
      picture:
        'https://lh3.googleusercontent.com/a-/AAuE7mCSVKgUbPkGwL0R7jTvpC7PeChbr3jKA75KhOetug=s96-c'
    },
    response: {
      email: 'daprince@email'
    },
    navigation: {
      state: {
        params: {
          item: {
            image: 'https://avatars2.githubusercontent.com/u/403938?v=4',
            followers: { totalCount: 64 },
            following: { totalCount: 0 },
            name: 'sengayire Prince',
            username: 'daprince',
            repositories: '100',
            url: 'https://github.com/salimane',
            stars: '100'
          }
        }
      },
      navigate: jest.fn()
    },
    ...props
  });
  describe('Rendering', () => {
    const props = createTestProps({});
    it('should match to snapshot', () => {
      const component = shallow(<ProfileScreen {...props} />);
    //   component
    //     .find(Button)
    //     .first()
    //     .props()
    //     .onPress();
    //   component
    //     .find(Button)
    //     .first()
    //     .simulate('press');
    });

    it('should match to snapshot', () => {
      const component = shallow(<ProfileScreen {...props} />);
      const signOutAsync = jest.fn();
      signOutAsync();
      // component
      //   .find(TouchableOpacity)
      //   .first()
      //   .props()
      //   .onPress();
      // component
      //   .find(TouchableOpacity)
      //   .first()
      //   .simulate('press');
      // expect(signOutAsync).toHaveBeenCalled();
    });
  });
});
