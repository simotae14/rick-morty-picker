import React from 'react'
import { Store } from '../store/Store';
import { IAction, IEpisode } from '../interfaces';

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
    console.log(state);
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
                {
                    state.episodes.map((episode: IEpisode) => {
                        return (
                            <section key={episode.id} className="episode-box">
                                <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
                                <div>
                                    { episode.name }
                                </div>
                                <section>
                                    <div>
                                        Season: { episode.season } Number: { episode.number }
                                    </div>
                                    <button type="button" onClick={() => toggleFavAction(episode) }>
                                        { state.favourites.find((fav: IEpisode) => fav.id === episode.id ) ? 'Unfav' : 'Fav' }
                                    </button>
                                </section>
                            </section>
                        );
                    })
                }
            </section>
        </React.Fragment>
    );
}
