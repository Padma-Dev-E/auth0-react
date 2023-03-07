/**
 * Created by WorkAxis www.workaxis.in
 * Developer: Padma Dev.E
 * Developer Contact: padmadev.e@workaxis.in
 * Admin: shyam@workaxis.in
 * Date: 06/03/23
 * Time: 8:28 PM
 * Project: auth0-dev-test
 */

import React, {useEffect, useState} from 'react';
import {useAuth0} from "@auth0/auth0-react";

const Profile = () => {
    const {user, isAuthenticated, isLoading, logout, getAccessTokenSilently} = useAuth0();
    const [user_metadata, setUserMetadata] = useState(null);

    useEffect(() => {
        const getUserMetadata = async () => {
            const domain = "domain";

            try {
                const accessToken = await getAccessTokenSilently({
                    authorizationParams: {
                        audience: `https://${domain}/api/v2/`,
                        scope: "read:current_user",
                    },
                });
                console.log(accessToken)
            } catch (e) {
                console.log(e.message);
            }
        };

        getUserMetadata().then(r => console.log("call completed"));
    }, [getAccessTokenSilently, user?.sub]);

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <>{isAuthenticated ?
            <div>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <pre>{JSON.stringify(user_metadata)}</pre>
            </div> :
            <div>Login again</div>


        }
        </>
    );
};

export default Profile;
