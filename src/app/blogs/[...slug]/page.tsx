import React from 'react'

const BlogDetailsPage = ({ blog }) => {
    return (
        <section>
            <h1>{blog?.title}</h1>
        </section>
    )
}

export default BlogDetailsPage
