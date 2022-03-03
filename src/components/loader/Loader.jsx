import React from "react";
import ContentLoader from "react-content-loader";

const Loader = (props) => (
    <ContentLoader
        speed={2}
        width={260}
        height={260}
        viewBox="0 0 260 260"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        style={{ margin: '0 20px 20px' }}
        {...props}
    >
        <rect x="0" y="128" rx="3" ry="3" width="260" height="13" />
        <rect x="0" y="154" rx="3" ry="3" width="260" height="33" />
        <rect x="2" y="208" rx="3" ry="3" width="100" height="18" />
        <circle cx="55" cy="55" r="55" />
        <rect x="129" y="202" rx="0" ry="0" width="128" height="31" />
    </ContentLoader>
);

export default Loader;

