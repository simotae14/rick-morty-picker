// interface initialState
interface IState {
    episodes: [],
    favourites: []
};

interface IAction {
    type: string,
    payload: any
}

export default function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                episodes: action.payload
            }
        default:
            return state
    }

}