import React from "react";
import { Switch, Route } from "react-router-dom";
import Setup from './Setup';

export default function Content(props) {
    
    return (
        <Switch>
            <Route exact path="/">
                <Setup me={props.me} onMeUpdate={props.onMeUpdate}/>
                {/* Friend list if set up*/}
            </Route>
            <Route path="/account">
                <Setup me={props.me} onMeUpdate={props.onMeUpdate}/>
            </Route>
        </Switch>
    );
}