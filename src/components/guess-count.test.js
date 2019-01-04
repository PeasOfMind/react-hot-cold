import React from 'react';
import {shallow} from 'enzyme';
import GuessCount from './guess-count';


describe('<GuessCount />', ()=>{
    it('Renders without crashing', () => {
        shallow(<GuessCount guessNoun="foo" guessCount="3"/>);
    })

    it('Renders the appropriate props', ()=> {
        const guessNoun = "foo";
        const guessCount = "3";
        const wrapper = shallow(<GuessCount guessNoun={guessNoun} guessCount={guessCount}/>);
        // expect(wrapper.html()).to.include(guessNoun);
        expect(wrapper.find('span').text()).toEqual(guessCount);

    })
})