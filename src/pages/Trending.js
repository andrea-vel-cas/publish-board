import React from 'react';
import { Grid, StampCard } from 'tabler-react';
import CardPR from '../components/CardPR';
import CardTeams from '../components/CardTeams';
import CardEmail from '../components/CardEmail';

const Trending = () => (
    <>
        <StampCard icon="trending-up" header="Trending topics" color="azure" />
        <Grid.Row cards> 
            <Grid.Col>
                <CardPR id={1}/>
            </Grid.Col>
            <Grid.Col>
                <CardTeams id={1}/>
            </Grid.Col>
            <Grid.Col>
                <CardEmail id={1}/>
            </Grid.Col>
        </Grid.Row>
    </>
);

export default Trending;
