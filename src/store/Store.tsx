import React from 'react';
import reducer from '../reducers';

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

export function StoreProvider(props: any): JSX.Element {
    return <Store.Provider value={initialState}>{ props.children }</Store.Provider>
}