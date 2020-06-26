import React from 'react';
import { Page } from 'tabler-react';
import Trending from './Trending';
import StarContributors from './StarContributors';
import HeaderPage from './HeaderPage';

const HomePage = () => (
    <>
        <HeaderPage />
        <Page.Content title="">
            <StarContributors />
            <Trending />
        </Page.Content>
    </>
);

export default HomePage;