import React, { useEffect, useState } from "react";
import { apiList } from "../config";
import useFetchData from "../hooks/fetchData";

const Blogs = () => {
    const {loading, error, data} = useFetchData(apiList.blogs);
   
    if (loading) {
        return <h2>Loading...</h2>;
    }
    if (error) {
        return <h2>{error?.message}</h2>;
    }
    return <div>blogs:{data.length}</div>;
};

export default Blogs;
