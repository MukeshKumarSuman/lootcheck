//  https://api.coindesk.com/v1/bpi/currentprice.json
// fack redux store in context of this test

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_BITCOIN } from './constants';
import { fetchBitcoin } from './bitcoin';
import { createStore } from 'redux';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({bitcoin: {}});

const mcokResponse = {body: {bpi: 'bitcoin price index'}};

fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mcokResponse);

it('create an async action to fetch the bitcoin value', () => {
    const expectedActions = [{bitcoin: mcokResponse.body, type: FETCH_BITCOIN}];

    return store.dispatch(fetchBitcoin()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
})