import React from 'react';
import { reducer } from '../reducers';
import { IState } from '../interfaces';

// create initialState
const initialState: IState = {
    episodes: [],
    favourites: [],
};

// create Store
export const Store = React.createContext<IState | any>(initialState);

export function StoreProvider({ children }: JSX.ElementChildrenAttribute): JSX.Element {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
}
