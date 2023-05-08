import React from "react";

const UsersList = ({ data }) => {
    return (
        <div>
            {data.map((user) => (
                <h2 key={user.id}>{user.name}</h2>
            ))}
        </div>
    );
};

export default UsersList;
