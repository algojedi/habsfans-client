import React, { useContext, useEffect, useRef, useState } from 'react'
import { useGetPosts, usePostPost } from '../../api'
import PostForm from '../post-form/post-form'
import Post from '../post/post'
import Button from '../button/button'

export default function Main({ setShowPostForm, handlePostClick }) {
    // data is what is returned onSuccess from getPosts
    const { isLoading, error, data } = useGetPosts() // useQuery('allPosts', getPosts)

    // if (isLoading) return 'Loading...'
    // if (error) return 'An error has occurred: ' + error.message

    // console.log({ isLoading })
    // console.log({ error })
    // console.log({ data })

    return (
        <div>
            <Button
                size='sm'
                type='primary'
                handleClick={() => {
                    setShowPostForm(true)
                }}
            >
                New Post
            </Button>
            <ul>
                {data &&
                    data.map((p) => (
                        <Post
                            handlePostClick={() => handlePostClick(p)}
                            key={p.id}
                            {...p}
                        />
                    ))}
            </ul>
            <div className='text-6xl'>I am main </div>
        </div>
    )
}
