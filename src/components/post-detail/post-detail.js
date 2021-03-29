import React from 'react'

function PostDetail({ post }) {
    if (!post) return;

    return (
        <div className='border-2 border-red-200 w-11/12 m-auto'>
            <h4 className="font-bold text-gray-800">{post.title}</h4>
            <p className="text-gray-600">{post.content}</p>
        </div>
    )
}

export default PostDetail
