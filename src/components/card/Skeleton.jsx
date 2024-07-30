import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={200}
        height={340}
        viewBox="0 0 200 340"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="18" y="0" rx="10" ry="10" width="165" height="150" />
        <rect x="18" y="165" rx="10" ry="10" width="165" height="20" />
        <rect x="18" y="197" rx="10" ry="10" width="165" height="20" />
        <rect x="0" y="234" rx="10" ry="10" width="200" height="44" />
    </ContentLoader>
)

export default Skeleton