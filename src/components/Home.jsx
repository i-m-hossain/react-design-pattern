import { apiList } from "../config";
import withLoadingAndError from "../HOC/withLoadingAndError";
import useFetchData from "../hooks/fetchData";
import UsersList from "./UsersList";

const Home = () => {
    const { loading, error, data } = useFetchData(apiList.users);
    const UserListComponent = withLoadingAndError(UsersList);

    return <UserListComponent loading={loading} error={error} data={data} />;
};

export default Home;
