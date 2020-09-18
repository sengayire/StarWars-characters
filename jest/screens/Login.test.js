import React from 'react';
import {shallow} from 'enzyme';
import {Login} from '../../src/screens';

describe('Login', () => {
    it('should match to snapshot - Secondary', () => {
        const component = shallow(<Login />)
        expect(component).toMatchSnapshot()
    });
});
