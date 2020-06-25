import React from 'react';
import { Card, Grid, Tag } from 'tabler-react';
import prs from '../content/pr-content';
import CommentsList from '../components/CommentsList';
import Authors from '../components/Authors';

const CardPR = ({ id }) => {
    //const randomId = 1;//Math.floor(Math.random() * 1) + 1;
    const content = prs.find(pr => pr.id === id);

    return (
        <>
            <Card isCollapsible isCollapsed title={content.title}  >
                <Card.Status color="blue" side />
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
                                <Tag color="orange" addOn={content.repo} addOnColor="blue">PR</Tag>
                            </Tag.List>
                        </Grid.Col>                        
                    </Grid.Row>
                </Card.Footer>
            </Card>
        </>
    );
}

export default CardPR;
