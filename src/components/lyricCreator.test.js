import React from 'react';
import {shallow, mount} from 'enzyme';

import LyricCreator from './lyricCreator'


describe ('<lyricCreator/>', () => {
    it('renders without crashing', () => {
        shallow(<LyricCreator/>)
    });

    it ('renders the ul list class', () =>{
        const wrapper = shallow(<LyricCreator/>);
        expect(wrapper.hasClass('lists')).toEqual(true);
    });
    

})


