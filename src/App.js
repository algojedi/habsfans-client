import './App.scss'

import Header from './components/header/header'
import Main from './components/main/main'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import PostDetail from './components/post-detail/post-detail'
import { useEffect, useState } from 'react'
import { authenticate } from './api'
import PostForm from './components/post-form/post-form'

const queryClient = new QueryClient()

function App() {
    const [showPost, setShowPost] = useState(false)
    const [selectedPost, setSelectedPost] = useState({})
    const [loggedUser, setUser] = useState('')
    // const [showMsg, setShowMsg] = useState(false)
    const [showPostForm, setShowPostForm] = useState(false)
    const [msg, setMsg] = useState('')

    const displayPostDetail = (post) => {
        setShowPost(true)
        setSelectedPost(post)
        console.log({ postInApp: post })
    }

    useEffect(() => {
        tryToAuthenticate()
    }, [])

    const tryToAuthenticate = () => {
        const token = window.localStorage.getItem('token')
        if (token && !loggedUser) {
            console.log('trying to authenticate')
            fetch(authenticate, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token
                }
            })
                .then((resp) => resp.json())
                .then((response) => {
                    console.log({ response })
                })

                .catch((err) =>
                    console.log({ authenticationExceptionMessage: err.message })
                )
        }
    }
    return (
        <div className='App'>
            <Header saveUser={setUser} setMessage={setMsg} user={loggedUser} />
            <div className='text-red-900'>{msg}</div>
            <QueryClientProvider client={queryClient}>
                <Main
                    handlePostClick={displayPostDetail}
                    setMessage={setMsg}
                    setShowPostForm={setShowPostForm}
                    user={loggedUser}
                />
                {showPostForm && <PostForm setShowPostForm={setShowPostForm} />}
                {showPost && !showPostForm && (
                    <PostDetail post={selectedPost} />
                )}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </div>
    )
}

export default App
