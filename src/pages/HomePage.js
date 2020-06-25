import React from 'react';
import { Page } from 'tabler-react';
import Trending from './Trending';
import StarContributors from './StarContributors';

const HomePage = () => (
    <>
        <Page.Content title="">
            <StarContributors />
            <Trending />
        </Page.Content>
    </>
);

export default HomePage;