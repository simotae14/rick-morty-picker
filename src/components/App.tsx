import React from 'react';
import { Link } from '@reach/router';

import { Store } from '../store/Store';

export default function App(props: any): JSX.Element {
    const { state } = React.useContext(Store);

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
                    <Link to="/">Home</Link>
                    <Link to="/faves">Favourite(s): { state.favourites.length }</Link>
                </div>
            </header>
            { props.children }
        </React.Fragment>
    );
}
