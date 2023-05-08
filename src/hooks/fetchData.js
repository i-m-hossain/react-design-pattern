import { useEffect, useState } from "react";

const useFetchData = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchAllData();
    }, []);
    const fetchAllData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const responseObj = await response.json();
            setData(responseObj);
            setLoading(false);
            setError(null);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };
    return { data, error, loading };
};

export default useFetchData;
