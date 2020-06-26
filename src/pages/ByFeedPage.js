import React from 'react';
import { Page, Grid, Card, StatsCard, Stamp } from 'tabler-react';
import prs from '../content/pr-content';
import CardPR from '../components/CardPR';
import teams from '../content/teams-content';
import CardTeams from '../components/CardTeams';
import emails from '../content/email-content';
import CardEmail from '../components/CardEmail';
import HeaderPage from './HeaderPage';

const ByFeedPage = () => {
    return(
    <>
        <HeaderPage />
        <Page.Content title="">
            <Grid.Row cards>
                <Grid.Col>
                <Card>
                    <Card.Header>
                        <Card.Title>
                        <Stamp color="blue" icon="code" /> PRs discussions</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <StatsCard layout={2} movement={7} total="12" label="Conversations today" />
                        {prs.map((pr) => (
                            <CardPR id={pr.id}/>
                        ))}
                    </Card.Body>
                </Card>                    
                </Grid.Col>
                <Grid.Col>
                    <Card>
                        <Card.Header>
                            <Card.Title>
                            <Stamp color="purple" icon="message-square" /> Teams conversations</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <StatsCard layout={2} movement={-6} total="5" label="Conversations today" />
                            {teams.map((t) => (
                                <CardTeams id={t.id}/>
                            ))}
                        </Card.Body>
                    </Card>  
                </Grid.Col>
                <Grid.Col>
                <Card>
                    <Card.Header>
                            <Card.Title>
                            <Stamp color="green" icon="mail" /> Email threads</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <StatsCard layout={2} movement={12} total="7" label="Conversations today" />
                            {emails.map((e) => (
                                <CardEmail id={e.id}/>
                            ))}
                        </Card.Body>
                    </Card> 
                </Grid.Col>
            </Grid.Row>
        </Page.Content>
    </>
    );
}

export default ByFeedPage;