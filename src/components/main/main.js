// import { computeHeadingLevel } from '@testing-library/react'
import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useGetPosts, usePostPost } from '../../api'
// import PostContext from '../../context/postsContext'
import Post from '../post/post'
import { QueryClient } from 'react-query';

// const queryClient = new QueryClient() // how to get from non-react component???

export default function Main({ handlePostClick }) {
    const [input, setInput] = useState('')
    const  mutation  = usePostPost() // essentially same as useMutation
    // data is what is returned onSuccess from getPosts
    const { isLoading, error, data } = useGetPosts() // useQuery('allPosts', getPosts)


    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    // need to ensure this runs once only

    const handleSubmit = () => {
        mutation.mutate({
            name: input,
            id: Math.random(),
            title: 'testId',
            content: 'let us hope this sucker works'
        })
        setInput('')
    }

    return (
        <div>
            <div className="text-purple-500">
             {mutation.isError ? 'oops, there is an error' : null }
             {mutation.isSuccess ? 'yay! post entered!' : null }
             {mutation.isLoading ? 'LOADING .... ' : null }

            </div>
            <div className='text-6xl'>I am main </div>
            <input
                className='w-40 m-auto border-2 px-4 py-2'
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type='submit'
                onClick={handleSubmit}
                className='px-4 py-2 border-2 text-gray-100 bg-red-700'
            >
                Submit
            </button>

            <ul>
                {data.map((p) => (
                    <Post handlePostClick={() => handlePostClick(p)} key={p.id} {...p} />
                    
                ))}
            </ul>
        </div>
    )
}
