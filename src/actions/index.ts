import { IState, IEpisode, IAction } from "../interfaces";

// function to fetch Data
export const fetchDataAction = async (dispatch: any) => {
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
export const toggleFavAction = (state: IState, dispatch: any, episode: IEpisode | any): IAction => {
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
