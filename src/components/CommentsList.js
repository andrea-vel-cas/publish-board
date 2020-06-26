import React from 'react';
import { Timeline } from 'tabler-react';

const CommentsList = ({ comments }) => {
    return (
    <>
    {comments.map((comment) => (
        <Timeline.Item key={comment.key} active badgeColor="lime" title={comment.user} description={comment.comment} />
    ))}
    </>
    );
}

export default CommentsList;