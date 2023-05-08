import { apiList } from "../config";
import withLoadingAndError from "../HOC/withLoadingAndError";
import useFetchData from "../hooks/fetchData";
import BlogList from "./BlogList";

const Blogs = () => {
    const { loading, error, data } = useFetchData(apiList.blogs);
    const BlogListComponent = withLoadingAndError(BlogList);

    return <BlogListComponent loading={loading} error={error} data={data} />;
};

export default Blogs;
