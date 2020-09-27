import React, { useState } from 'react';
import { shallow } from 'enzyme';
import {SearchUser} from '../../src/components';

describe('Search user', () => {
    it('render without failing', () =>{
const wrapper= shallow(<SearchUser />)
console.log('wrapper', wrapper);
} )
})