import { useEffect, useState } from "react";

const useFetchData = (api) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchAllData(api);
    }, [api]);
    const fetchAllData = async (api) => {
        try {
            setLoading(true);
            const response = await fetch(api);
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
