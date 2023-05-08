import React from 'react';

const BlogList = ({data}) => {
    return (
        <div>
            {data.map((post) => (
                <h2 key={post.id}>{post.title}</h2>
            ))}
        </div>
    );
};

export default BlogList;