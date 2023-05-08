import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchAllUsers();
    }, []);
    const fetchAllUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const data = await response.json();
            setUsers(data);
            setLoading(false);
            setError(null);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };
    if (loading) {
        return <h2>Loading...</h2>;
    }
    if (error) {
        return <h2>{error?.message}</h2>;
    }
    return (
        <div>
            users: {users.length}
        </div>
    );
};

export default Home;    