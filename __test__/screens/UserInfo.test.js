import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import DevProfile from '../../src/screens/UserInfo';
describe('DevProfile', () => {
  const createTestProps = props => ({
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
    it('should run without failing', () => {
      const component = shallow(<DevProfile {...props} />);
      const shareProfile = jest.fn();
      shareProfile();
      component
        .find(TouchableOpacity)
        .first()
        .props()
        .onPress();
      component
        .find(TouchableOpacity)
        .first()
        .simulate('press');
      expect(shareProfile).toHaveBeenCalled();
    });

    it('should run without failing', () => {
      const component = shallow(<DevProfile {...props} />);
      const Linking = { openUrl: jest.fn() };
      Linking.openUrl();

      component.find('Text[testId="profile"]').simulate('press');
      expect(Linking.openUrl).toHaveBeenCalled();
    });
  });
});
