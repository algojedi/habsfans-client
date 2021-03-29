import './App.scss'

import Header from './components/header/header'
import Main from './components/main/main'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import PostDetail from './components/post-detail/post-detail';
import { useState } from 'react'

const queryClient = new QueryClient()

function App() {
    const [showPost, setShowPost] = useState(false)
    const [selectedPost, setSelectedPost] = useState({})
    const displayPostDetail = ( post ) => {
        setShowPost(true)
        setSelectedPost(post)
        console.log('why is click funcion in App js running?')
        console.log( { postInApp: post } )
    }

    return (
        <div className='App'>
            <Header />
            <QueryClientProvider client={queryClient}>
                <Main handlePostClick={displayPostDetail} />
                { showPost ? <PostDetail post={selectedPost}/> : null }
               <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </div>
    )
}

export default App
