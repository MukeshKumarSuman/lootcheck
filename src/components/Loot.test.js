import React from 'react';
import { mount, shallow } from 'enzyme';
import { Loot } from './Loot';

describe('Loot Module', () => {
    const mockFetchBitcoin = jest.fn();
    let props = {balance: 10, bitcoin: {}, fetchBitcoin: mockFetchBitcoin};
    let loot = shallow(<Loot  {...props}/>);

    it('render properly', () => {
        expect(loot).toMatchSnapshot();
    });

    describe('when mounted', () => {
        beforeEach(() => {
            loot = mount(<Loot {...props}/>);
        });

        it('dispatches the fetchBitcoin() function it received from props.', () => {
            expect(mockFetchBitcoin).toHaveBeenCalled();
        });
    });

    describe('when there are valid bitcoin props', () => {
        beforeEach(() => {
            const props =  {balance: 10, bitcoin: {bpi: {USD: {rate: '1,000'}}},fetchBitcoin: mockFetchBitcoin};
            loot = shallow(<Loot  {...props}/>);
        });

        it('display the correct bitcoin value', () => {
            expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01');
        });
    });
});