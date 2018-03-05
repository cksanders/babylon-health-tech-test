import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai'

Enzyme.configure({adapter : new Adapter()});

global.shallow = shallow;
global.expect = expect;

console.error = message => {
  throw new Error(message);
};