import React from 'react';
import { Grid, StampCard, Avatar, Card, Table, Header, Tag } from 'tabler-react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import users from '../content/users-content';

const StarContributors = () => {
    const left = users.filter(u => u.id <= 6);
    const right = users.filter(u => u.id > 6);
    const data = {
        columns: [
          ['email', 30, 200, 100, 400, 150, 25],
          ['PRs', 50, 20, 110, 200, 175, 75],
          ['teams', 80, 120, 70, 140, 200, 55]
        ],
        colors: {
            email: 'green',
            PRs: 'blue',
            teams: 'purple'
        },
      };
    return(
    <>
        <StampCard icon="star" header="Star Contributors" color="yellow" />
        <Grid.Row > 
            <Grid.Col>
                <Card isCollapsible title="Collaboration Activity"  >
                    <Card.Body>
                        <Grid.Row>
                            <Grid.Col><C3Chart data={data} /></Grid.Col>
                            <Grid.Col>
                                <Table highlightRowOnHover>
                                    <Table.Body>
                                        {left.map((user, key) => (
                                            <Table.Row>
                                                <Table.Col><Avatar imageURL={user.url} /></Table.Col>
                                                <Table.Col><Header.H6>{user.name}</Header.H6></Table.Col>
                                                <Table.Col>
                                                    <Tag.List>
                                                        <Tag color="blue" addOnIcon="code">{user.prs}%</Tag>
                                                        <Tag color="purple" addOnIcon="message-square">{user.teams}%</Tag>
                                                        <Tag color="green" addOnIcon="mail">{user.email}%</Tag>
                                                    </Tag.List>
                                                </Table.Col>
                                            </Table.Row>
                                        ))}
                                    </Table.Body>
                                </Table>
                            </Grid.Col>
                            <Grid.Col>
                            <Table highlightRowOnHover>
                                    <Table.Body>
                                        {right.map((user, key) => (
                                            <Table.Row>
                                                <Table.Col><Avatar imageURL={user.url} /></Table.Col>
                                                <Table.Col><Header.H6>{user.name}</Header.H6></Table.Col>
                                                <Table.Col>
                                                    <Tag.List>
                                                        <Tag color="blue" addOnIcon="code">{user.prs}%</Tag>
                                                        <Tag color="purple" addOnIcon="message-square">{user.teams}%</Tag>
                                                        <Tag color="green" addOnIcon="mail">{user.email}%</Tag>
                                                    </Tag.List>
                                                </Table.Col>
                                            </Table.Row>
                                        ))}
                                    </Table.Body>
                                </Table>
                            </Grid.Col>
                        </Grid.Row>
                        
                        
                    </Card.Body>
                </Card>
            </Grid.Col>
        </Grid.Row>
    </>
    );
}

export default StarContributors;
