import React, { useState } from 'react'
import { usePostPost } from '../../api'
import Button from '../button/button'

function PostForm({ setShowPostForm }) {
    const mutation = usePostPost() // essentially same as useMutation
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    // handle post submission
    const handleSubmit = () => {
        mutation.mutate({
            title,
            content
        })
        setTitle('')
        setContent('')
    }

    return (
        <section className='w-100'>
            <div className='text-blue-300'>I am the post form</div>
            <Button
                size='sm'
                type='cancel'
                handleClick={() => {
                    setShowPostForm(false)
                }}
            >
                Cancel
            </Button>
            <form>
                <input
                    className='w-40 m-auto border-2 px-4 py-2'
                    type='text'
                    value={title}
                    placeholder='Post Title...'
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className='mt-1 flex rounded-md shadow-sm'>
                    <textarea
                        className='w-full h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
                        type='text'
                        placeholder='Post content ...'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button
                    type='submit'
                    onClick={handleSubmit}
                    className='px-4 py-2 border-2 text-gray-100 bg-red-700'
                >
                    Submit
                </button>
                <div className='text-purple-500'>
                    {mutation.isError ? 'oops, there is an error' : null}
                    {mutation.isSuccess ? 'yay! post entered!' : null}
                    {mutation.isLoading ? 'LOADING .... ' : null}
                </div>
            </form>
        </section>
    )
}

export default PostForm
