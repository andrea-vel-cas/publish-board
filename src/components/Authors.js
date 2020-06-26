import React from 'react';
import { Avatar } from 'tabler-react';

const Authors = ({ authors }) => {
    return (
    <>
    <Avatar.List>
    {authors.map((author) => (
        <Avatar key={author.name} size="md" color="cyan"/*imageURL={url}*/ >
            {author.name}
        </Avatar>
    ))}
    </Avatar.List>
    </>
    );
}

export default Authors;