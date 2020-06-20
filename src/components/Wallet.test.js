import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from "./wallet";
import balance from '../reducers/balance';

describe(' Wallet Module', () => {
    const mockDeposit = jest.fn();
    const mockWidthdraw = jest.fn();
    const props = {balance: 20, deposit: mockDeposit, widthdraw: mockWidthdraw}
    const wallet = shallow( <Wallet {...props}/>);

    it('render properly', () => {
        expect(wallet).toMatchSnapshot();
    });

    it('display the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
    });

    it('creates an inputto deposit into or widthdraw from the balance ', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    });

    describe('when user types into the wallet input', () => {
        const userBalance = '25';

        beforeEach( () => {
            wallet.find('.input-wallet').simulate('change', {target: {value: userBalance}});
        });

        it('update the local wallet balance in state and converts it to number', () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
        });

        describe('and the user wants to make a deposit', () => {

            beforeEach(() => {
                wallet.find('.btn-deposit').simulate('click');
            });

            it('dispatches the deposit() it receives from props with local balance', () => {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
            });
        });

        describe('and the user wants to make a widthdrawal', () => {

            beforeEach(() => {
                wallet.find('.btn-widthdraw').simulate('click');
            });

            it('dispatches the widthdraw() it receives from props with local balance', () => {
                expect(mockWidthdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
            });
        });
    });
});
