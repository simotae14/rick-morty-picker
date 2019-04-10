import React from 'react';
import { func } from 'prop-types';

// interface initialState
interface IState {
    episodes: [],
    favourites: []
};

// create initialState
const initialState: IState = {
    episodes: [],
    favourites: []
};

// create Store
export const Store = React.createContext<IState>(initialState);

function reducer() {
    // TBD
}

export function StoreProvider(props: any): JSX.Element {
    return <Store.Provider value={initialState}>{ props.children }</Store.Provider>
}