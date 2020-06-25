import React from 'react';
import { Timeline, Text } from 'tabler-react';

const CommentsList = ({ comments }) => {
    return (
    <>
    {comments.map((comment, key) => (
        <Timeline.Item active badgeColor="lime" title={comment.user} description={comment.comment} />
    ))}
    </>
    );
}

export default CommentsList;