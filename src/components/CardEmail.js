import React from 'react';
import { Card, Header, Text, Button, Avatar, Tag, Grid } from 'tabler-react';
import emails from '../content/email-content';
import CommentsList from '../components/CommentsList';
import Authors from '../components/Authors';

const CardEmail = ({ id }) => {
    //const randomId = 1;//Math.floor(Math.random() * 1) + 1;
    const content = emails.find(e => e.id === id);

    return (
        <>
            <Card isCollapsible isCollapsed title={content.subject}  >
                <Card.Status color="green" side />
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
                                <Tag color="orange" addOnIcon="mail">Email</Tag>
                            </Tag.List>
                        </Grid.Col>                        
                    </Grid.Row>
                </Card.Footer>
            </Card>
        </>
    );
}

export default CardEmail;
