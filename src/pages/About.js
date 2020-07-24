import React from 'react';
import { BlogCard, Page, Badge } from 'tabler-react';
import users from '../content/users-content';
import HeaderPage from './HeaderPage';

const About = () => {
    const me = users.find(u => u.name === 'Andrea');
    return(
        <>
            <HeaderPage />
            <Page.Content title="">
                <BlogCard
                    title="Hack project! "
                    postUrl="#"
                    description="Pandemic time has made as aware of how badly we need to collaborate in hard situations, mostly online. 
                                As we know we all communicate in diverse ways and through different channels. 
                                This is my attempt to bring awareness of this to everyone while we are all in the same loop."
                    avatarImgSrc={me.url}
                    authorName={me.name}
                    date="2 days ago"
                    imgSrc="https://msftblog.com/wp-content/uploads/2019/05/msftblog-team-collaboration.png"
                    imgAlt="Team Collaboration"
                    iconName="heart"
                    iconHref="#"
                    aside
                />
                <p align="right">
                    <Badge color="primary" className="mr-1">
                        Team collaboration
                    </Badge>
                    <Badge color="secondary" className="mr-1">
                        Microsoft Values
                    </Badge>
                    <Badge color="info" className="mr-1">
                        React
                    </Badge>
                    <Badge color="warning" className="mr-1">
                        Inclusion
                    </Badge>
                    <Badge color="success" className="mr-1">
                        Diversity
                    </Badge>
                    <Badge color="danger" className="mr-1">
                        Hackathon
                    </Badge>
                </p>
            </Page.Content>
        </>
    );
}

export default About;