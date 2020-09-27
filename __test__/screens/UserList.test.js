import React from 'react';
import { shallow } from 'enzyme';
import ListScreen  from '../../src/screens/UserList';
const createTestProps = props => ({
  data: {
    search: [
      {
        avatarUrl: 'https://avatars2.githubusercontent.com/u/403938?v=4',
        bio:
          'Founder @agbaramimo. I like to figure out why we believe what we believe',
        createdAt: '2010-09-17T04:42:22Z',
        email: 'me@salimane.com',
        followers: {
          totalCount: 64
        },
        following: {
          totalCount: 0
        },
        id: '0',
        image: 'https://avatars2.githubusercontent.com/u/403938?v=4',
        location: 'Africa, Benin, Rwanda, Ghana, Kenya, China',
        login: 'salimane',
        name: 'Salimane Adjao Moustapha',
        repositories: {
          totalCount: 153
        },
        starredRepositories: {
          totalCount: 89
        },
        stars: {
          totalCount: 89
        },
        url: 'https://github.com/salimane',
        username: 'salimane',
        websiteUrl: 'https://salimane.com'
      }
    ]
  },
  response: {
    email: 'daprince@email'
  },
  route: {
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
  navigation: {
    navigate: jest.fn()
  },
  ...props
});
describe('ListScreen', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const props = createTestProps({});
      const ghDevelopers = jest.fn();
      const List = jest.fn();
      ghDevelopers(props.search);
      const component = shallow(<ListScreen {...props} />);
      List()
      console.log('component >>>', List.mo);
      expect(ghDevelopers).toHaveBeenCalled();
    });
  });
});
