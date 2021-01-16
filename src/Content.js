import React from "react";
import { Switch, Route } from "react-router-dom";
import Setup from './Setup';

export default function Content({ db }) {
    return (
        <Switch>
            <Route exact path="/">
                <Setup db={db}/>
                {/* Friend list if set up*/}
            </Route>
            <Route path="/account">
                {/* Setup page but without intro text */}
            </Route>
        </Switch>
    );
}