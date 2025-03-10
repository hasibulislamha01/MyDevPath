import React from 'react'

const BlogDetailsPage = async ({ params }: {
    params: { blogId: number }
}) => {


    return (
        <section className='min-h-screen'>
            Details of blog {params?.blogId}
        </section>
    )
}

export default BlogDetailsPage
