import React from 'react';

const UsersList = ({data}) => {
    return (
        <div>
            users: {data.length}
        </div>
    );
};

export default UsersList;