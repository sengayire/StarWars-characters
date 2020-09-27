
import React, { useState } from 'react';
import { shallow } from 'enzyme';
import { TouchableOpacity } from 'react-native';

import LoginScreen from '../../src/screens/Login';
import {Login, Profile} from '../../src/components';
import {setHookState} from '../../__mock__/setHookState';

const reactMock = require('react')
describe('LoginScreen', () => {
  const props = props =>({
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
      navigate: jest.fn()
    },
    ...props
  });
  describe('Rendering', () => {
    const setData = jest.fn();
    const setResponse = jest.fn();
    const useStateSpy = jest.fn(React, 'useState');
    useStateSpy.mockImplementation({ data: [], isFetching: false });
    useStateSpy.mockImplementation({ response: [], isFetching: false });
    it('should match to snapshot', () => {
      const googleLogIn = jest.fn();
      const component = shallow(<LoginScreen />);
      shallow(<Login />)
      console.log('component ///', component.find(Login));
      googleLogIn();
      component
        .find(Login)
        .first()
        .props()
        .onPress();
      component
        .find(Login)
        .first()
        .simulate('press');

      expect(googleLogIn).toHaveBeenCalled();
    });
    it('Test On Login Succes', () => {
      reactMock.useState = setHookState({
        data: [],
        isFetching: false
    })
      const component = shallow(<LoginScreen />);
      shallow(<Profile {...props()}/>)
      // setData({});
      // component
      //   .find(Profile)
      // //   .first()
      // //   .props()
      // //   .onPress();
    });
  });
});