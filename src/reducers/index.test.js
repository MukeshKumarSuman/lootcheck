import rootReducer from './index';


describe('rootReducer', () => {
    // balance reducer has default state = 0;
    // bitcoin reducer has default state = {};
    it('initalizes the default state', () => {
        expect(rootReducer({}, {})).toEqual({balance: 0, bitcoin: {}});
    });
});