import * as constants from './constants';
import * as actions from './balance';


it('cretae an action to set the balance', () => {
    const balance = 0;
    const expectedAction = {type: constants.SET_BALANCE, balance};
    expect(actions.setBalance(balance)).toEqual(expectedAction);

});

it('cretae an action to deposit into the balance', () => {
    const deposit = 0;
    const expectedAction = {type: constants.DEPOSIT, deposit};
    expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it('cretae an action to withdraw from the balance', () => {
    const widthdrawal = 10;
    const expectedAction = {type: constants.WIDTHDRAW, widthdrawal};
    expect(actions.widthdraw(widthdrawal)).toEqual(expectedAction);
});
