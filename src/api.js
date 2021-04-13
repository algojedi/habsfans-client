import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from 'react-query'

// const queryClient = useQueryClient()
const postPostUrl = 'http://localhost:8080/posts'
// @RequestMapping(method = RequestMethod.POST, value = "/persons/{id}/posts") // spring boot
const getPostsUrl = 'http://localhost:8080/posts' // returns all posts

export const registerUrl = 'http://localhost:8080/register'
export const signInUrl = 'http://localhost:8080/signin'
export const authenticate = 'http://localhost:8080/authenticate'

const fetchPosts = async () => {
    // const bearerToken = window.localStorage.getItem("token");
    // if (!bearerToken) return [] // display no posts
    const res = await fetch(getPostsUrl) //, {
    return res.json()
}

const postPost = async (newPost) => {
    const bearerToken = window.localStorage.getItem('token')
    if (!bearerToken) {
        console.log('need to sign in before posting')
        return
    }
    const res = await fetch(postPostUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: bearerToken
        },
        body: JSON.stringify(newPost)
    })
    // const post = await res.json()
    return res.json()
}

export const useGetPosts = () => {
    return useQuery('allPosts', fetchPosts)
}

export const usePostPost = () =>
    useMutation(postPost, {
        //   onSuccess: () => queryClient.refetchQueries('allPosts')
    })

// export const postPost = async (newPost) => await axios.post(postPostUrl, newPost)
