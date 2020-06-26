import React from 'react';
import { Page, Header, Button } from 'tabler-react';

const NotFoundPage = () => (
    <>
        <Page title="">
            <span align="middle">
                <Header.H1>404</Header.H1>
                <Header.H2>Oops... Nothing to see!</Header.H2>
                <br />
                <Button icon="arrow-left" color="primary" outline onclick={window.location.href='/'} >
                    Go back
                </Button>
            </span>
        </Page>
    </>
);

export default NotFoundPage;