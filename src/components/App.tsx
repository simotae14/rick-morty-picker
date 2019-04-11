import React from 'react'
import { Store } from '../store/Store';
import { IAction, IEpisode } from '../interfaces';

// import with Lazy React
const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

export default function App(): JSX.Element {
    const { state, dispatch } = React.useContext(Store);

    // useEffect hook to load the page when the data are ready
    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction()
    });

    // function to fetch Data
    const fetchDataAction = async () => {
        const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
        const data = await fetch(URL);
        const dataJSON = await data.json();
        // return the dispatch action
        return dispatch({
            type: 'FETCH_DATA',
            payload: dataJSON._embedded.episodes
        });
    }

    // function to add Favourite
    const toggleFavAction = (episode: IEpisode): IAction => {
        // check if the episode it's already in the Favourites
        const episodeInFav: boolean = state.favourites.includes(episode);
        let dispatchObject: IAction = {
            type: 'ADD_FAV',
            payload: episode
        };
        if (episodeInFav) {
            // create a new favourite array without the episode
            const favWithoutEpisode = state.favourites.filter((currFav: IEpisode) => currFav.id !== episode.id)
            dispatchObject = {
                type: 'REMOVE_FAV',
                payload: favWithoutEpisode
            }
        }
        return dispatch(dispatchObject);
    }

    // define the props object to pass
    const props = {
        episodes: state.episodes,
        toggleFavAction,
        favourites: state.favourites
    }
    return (
        <React.Fragment>
            <header className="header">
                <div>
                    <h1>
                        Rick and Morty
                    </h1>
                    <p>
                        Pick your favourite episode!!!
                    </p>
                </div>
                <div>
                    Favourite(s): { state.favourites.length }
                </div>
            </header>
            <section className="episode-layout">
                <React.Suspense fallback={<div>loading ...</div>}>
                    <EpisodesList { ...props } />
                </React.Suspense>
            </section>
        </React.Fragment>
    );
}
