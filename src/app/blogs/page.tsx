import Link from 'next/link'
import React from 'react'
const blogs = [
  {id: 1, title: 'blog1', desc: 'lorem20 llsdf sdjf o eofds oei' },
  {id: 2, title: 'blog3', desc: 'lorem20 llsdf sdjf o eofds oei' },
  {id: 3, title: 'blog4', desc: 'lorem20 llsdf sdjf o eofds oei' },
]

const BlogPage = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center'>
      <h1 className='text-center text-lg font-black mb-8'>blogs</h1>

      <div className='grid place-items-center justify-items-stretch gap-6'>
        {blogs.map(blog =>
          <Link key={blog.title} href={`/blogs/${blog?.id}`}>
          <button >See Blog</button>
          </Link>
        )}
      </div>

    </section>
  )
}

export default BlogPage
