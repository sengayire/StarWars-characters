
import React, { useState } from 'react';
import { shallow } from 'enzyme';
import { TouchableOpacity } from 'react-native';
import LoginScreen from '../../src/screens/Login';

describe('LoginScreen', () => {
  describe('Rendering', () => {
    const setDate = jest.fn();
    const setResponse = jest.fn();
    const useStateSpy = jest.fn(React, 'useState');
    useStateSpy.mockImplementation({ data: [], isFetching: false });
    useStateSpy.mockImplementation({ response: [], isFetching: false });
    it('should match to snapshot', () => {
      const googleLogIn = jest.fn();
      const component = shallow(<LoginScreen />);
      googleLogIn();
      component
        .find(TouchableOpacity)
        .first()
        .props()
        .onPress();
      component
        .find(TouchableOpacity)
        .first()
        .simulate('press');

      expect(googleLogIn).toHaveBeenCalled();
    });
  });
});