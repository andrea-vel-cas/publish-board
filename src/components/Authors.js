import React from 'react';
import { Avatar } from 'tabler-react';

const Authors = ({ authors }) => {
    return (
    <>
    <Avatar.List>
    {authors.map((author, key) => (
        <Avatar size="md" color="cyan"/*imageURL={url}*/ >
            {author.name}
        </Avatar>
    ))}
    </Avatar.List>
    </>
    );
}

export default Authors;