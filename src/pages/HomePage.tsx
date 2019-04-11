import React from 'react'

import { Store } from '../store/Store';
import { IEpisodesProps } from '../interfaces';
import { fetchDataAction, toggleFavAction } from '../actions';

// import with Lazy React
const EpisodesList = React.lazy<any>(() => import('../components/EpisodesList'));

export default function HomePage() {
    const { state, dispatch } = React.useContext(Store);

    // useEffect hook to load the page when the data are ready
    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch)
    });

    // define the props object to pass
    const props: IEpisodesProps = {
        episodes: state.episodes,
        store: {
            state,
            dispatch
        },
        toggleFavAction,
        favourites: state.favourites
    }

    return (
        <React.Fragment>
            <React.Suspense fallback={<div>loading ...</div>}>
                <section className="episode-layout">
                    <EpisodesList { ...props } />
                </section>
            </React.Suspense>
        </React.Fragment>
    )
}
