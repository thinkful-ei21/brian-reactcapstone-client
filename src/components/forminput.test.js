import React from 'react';
import {shallow, mount} from 'enzyme';

import FormInput from './forminput.js'

describe ('<FormInput/>', () => {
    it('renders the', () =>{
        shallow(<FormInput/>);
    });
    it('has class name form-input', () => {
        const wrapper = shallow(<FormInput/>);
        expect(wrapper.hasClass("form-input")).toEqual(true);
    })



})  