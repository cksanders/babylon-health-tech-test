import React from 'react';
import Checkbox from '../Checkbox';

describe('Checkbox', () => {
  it('should render checkbox label', () => {
    const wrapper = shallow(<Checkbox label={'Example'}/>);
    const expectedOutput = <label>Example</label>;
    
    expect(wrapper.containsMatchingElement(expectedOutput)).to.equal(true);
  });
  
  it('should render checkbox as unchecked', () => {
    const wrapper = shallow(<Checkbox label={'Example'}/>);
    const expectedOutput = 'icons-unchecked-checkbox.png';
    
    expect(wrapper.find('img').prop('src')).to.equal(expectedOutput);
  });
  
  it('should toggle checkbox on click', () => {
    const wrapper = shallow(<Checkbox label={'Example'}/>);
    const expectedOutput = 'icons-checked-checkbox.png';
    
    wrapper.find('img').simulate('click');
    
    expect(wrapper.find('img').prop('src')).to.equal(expectedOutput);
  });
});
