import React from 'react';
import { shallow } from 'enzyme';
import {createSerializer} from 'enzyme-to-json';
import App from './App';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
// My Unit test
describe('App module', () => {

  const app = shallow(<App />);

  test('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  test('contains the connected wallet component', () => {
    //console.log(app.debug());
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  });

  test('contains the connected loot component', () => {
    //console.log(app.debug());
    expect(app.find('Connect(Loot)').exists()).toBe(true);
  });

});
