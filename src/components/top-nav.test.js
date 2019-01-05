import React from 'react';
import {shallow, mount} from 'enzyme';
import TopNav from './top-nav';


describe('<TopNav />', ()=>{
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should fire the onRestartGame callback when New Game is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onRestartGame={callback}/>);
        const link = wrapper.find('.new');
        link.simulate('click');
        expect(callback).toHaveBeenCalled();

    });

    it('Should fire the onGenerateAuralUpdate callback when Hear State of Game is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onGenerateAuralUpdate={callback}/>);
        const link = wrapper.find('.status-link');
        link.simulate('click');
        expect(callback).toHaveBeenCalled();
    });
})