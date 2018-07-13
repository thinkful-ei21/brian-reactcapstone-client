import React from 'react';
import {shallow, mount} from 'enzyme';

import Input from './input.js'

describe ('<Input/>', () => {
    it('renders the', () =>{
        shallow(<Input/>);
    });
    it('has class name form-input', () => {
        const wrapper = shallow(<Input/>);
        expect(wrapper.hasClass("form-input")).toEqual(true);
    })



})  