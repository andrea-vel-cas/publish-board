import React from 'react';
import { Card, Tag, Grid } from 'tabler-react';
import teams from '../content/teams-content';
import CommentsList from '../components/CommentsList';
import Authors from '../components/Authors';

const CardTeams = ({ id }) => {
    //const randomId = 1;//Math.floor(Math.random() * 1) + 1;
    const content = teams.find(t => t.id === id);

    return (
        <>
            <Card isCollapsible isCollapsed title={content.name}  >
                <Card.Status color="purple" side />
                <Card.Body>
                    <CommentsList comments={content.comments} />
                </Card.Body>
                <Card.Footer>
                    <Grid.Row alignItems="center">
                        <Grid.Col>
                            <Authors authors={content.authors} />
                        </Grid.Col>
                        <Grid.Col>
                            <Tag.List>
                                <Tag color="lime" addOn={content.channel} addOnColor="purple">{content.name}</Tag>
                            </Tag.List>
                        </Grid.Col>                        
                    </Grid.Row>
                </Card.Footer>
            </Card>
        </>
    );
}

export default CardTeams;
