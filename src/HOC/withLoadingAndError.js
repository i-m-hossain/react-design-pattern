import React from "react";

const withLoadingAndError = (WrappedComponent) => {
    return function LoadingAndErrorComponent({ loading, error, ...props }) {
        if (loading) {
            return <h2>loading...</h2>;
        }
        if (error) {
            return <h2>{error.message}</h2>;
        }
        return <WrappedComponent {...props}/>;
    };
};

export default withLoadingAndError;
