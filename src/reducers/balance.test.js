import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
    it('sets a balance', () => {
        const balance = 10;
        expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance})).toEqual(balance);
    });

    it('deposit into the balance', () => {
        const deposit = 10;
        const initialState = 5;
        expect(balanceReducer(initialState, {type: constants.DEPOSIT, deposit})).toEqual(initialState + deposit);
    });

    it('widthdraw from the balance', () => {
        const widthdrawal = 10;
        const initialState = 20;
        expect(balanceReducer(initialState, {type: constants.WIDTHDRAW, widthdrawal})).toEqual(initialState - widthdrawal);
    });
});