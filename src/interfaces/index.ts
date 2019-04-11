/**
|--------------------------------------------------
| All the interfaces!!!
|--------------------------------------------------
*/

// interface initialState
export interface IState {
    episodes: Array<IEpisode>,
    favourites: Array<any>
};

export interface IAction {
    type: string,
    payload: any
};

// interface for episode
export interface IEpisode {
    airdate: string
    airstamp: string
    airtime: string
    id: number
    image: {
        medium: string
        original: string
    }
    name: string
    number: number
    runtime: number
    season: number
    summary: string
    url: string
}

// interface for the Episodes props
export interface IEpisodesProps {
    episodes: Array<IEpisode>,
    favourites: Array<IEpisode>,
    store: {
        state: IState,
        dispatch: any
    },
    toggleFavAction: (state: IState, dispatch: any, episode: IEpisode): IAction
}