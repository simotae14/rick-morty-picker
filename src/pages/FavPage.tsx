import React from 'react'

import { Store } from '../store/Store';
import { IEpisodesProps } from '../interfaces';
import { toggleFavAction } from '../actions';

// import with Lazy React
const EpisodesList = React.lazy<any>(() => import('../components/EpisodesList'));

export default function FavPage(): JSX.Element {
    const { state, dispatch } = React.useContext(Store);

    const props: IEpisodesProps = {
        episodes: state.favourites,
        store: {
            state,
            dispatch
        },
        toggleFavAction,
        favourites: state.favourites
    }

    return (
        <React.Suspense fallback={<div>loading...</div>}>
            <div className="episode-layout">
                <EpisodesList {...props} />
            </div>
        </React.Suspense>
    );
}
