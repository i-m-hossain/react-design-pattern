import { apiList } from '../config';
import useFetchData from '../hooks/fetchData';

const Home = () => {
    const {loading, error, data} = useFetchData(apiList.users)
    if (loading) {
        return <h2>Loading...</h2>;
    }
    if (error) {
        return <h2>{error?.message}</h2>;
    }
    return (
        <div>
            users: {data.length}
        </div>
    );
};

export default Home;    