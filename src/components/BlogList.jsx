import React from 'react';

const BlogList = ({data}) => {
    return (
        <div>
            blogs:{data.length}
        </div>
    );
};

export default BlogList;