import React, { useEffect, useState } from "react";

const Blogs = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchAllPosts();
    }, []);
    const fetchAllPosts = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await response.json();
            setPosts(data);
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
    return <div>blogs:{posts.length}</div>;
};

export default Blogs;
