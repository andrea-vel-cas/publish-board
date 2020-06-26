import React from 'react';

import { Nav, /*Button,*/ Site } from 'tabler-react';
//import { onSignIn } from '../services/AuthProvider';

const HeaderPage = () => (

    /*const login = (async () => {
        await onSignIn(false);
    })();*/

/*    const login = console.log("Login");

    return (
    <>
        <Site.Header align="right">
            <Button color="azure" /*onClick={login}*//*>Sign in</Button>
        </Site.Header>*/
    <>
        <Site.Nav>
                <Nav>
                    <Nav.Item value="Trending" to="/" icon="home" useExact="true" />
                    <Nav.Item icon="file-text" value="Topics by Feed" to="/by-feed" useExact="true"/>
                    <Nav.Item icon="box" value="About" to="/about" useExact="true" />
                </Nav>
        </Site.Nav>
    </>
);
//}

export default HeaderPage;