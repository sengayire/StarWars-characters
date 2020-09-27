import React, { useState } from 'react';
import { shallow } from 'enzyme';
import {UserList} from '../../src/components';

describe('Search user', () => {
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
    it('render without failing', () =>{
const wrapper= shallow(<UserList {...props} />)
console.log('wrapper', wrapper.debug());
} )
})