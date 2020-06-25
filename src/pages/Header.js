import React from 'react';

import { Nav, /*Button,*/ Site } from 'tabler-react';
//import { onSignIn } from '../services/AuthProvider';

const Header = () => (

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
                    <Nav.Item value="Home" to="/" icon="home" useExact="true" />
                    <Nav.Item  icon="file-text" value="Documentation" to="/" />
                    <Nav.Item  icon="box" value="About" to="/" />
                </Nav>
        </Site.Nav>
    </>
);
//}

export default Header;