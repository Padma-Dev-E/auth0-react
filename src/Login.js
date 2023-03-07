/**
 * Created by WorkAxis www.workaxis.in
 * Developer: Padma Dev.E
 * Developer Contact: padmadev.e@workaxis.in
 * Admin: shyam@workaxis.in
 * Date: 06/03/23
 * Time: 8:28 PM
 * Project: auth0-dev-test
 */

import React from 'react';
import {useAuth0} from "@auth0/auth0-react";

export default function Login() {
    const {loginWithRedirect} = useAuth0();
    return (
        <div className="App">
            <p>{window.location.origin}</p>
            <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
    );
}