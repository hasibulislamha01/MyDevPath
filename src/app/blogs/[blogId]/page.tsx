import React from 'react'

const BlogDetailsPage = async ({ params }) => {

    
    return (
        <section>
            Details of blog {params?.blogId}
        </section>
    )
}

export default BlogDetailsPage
