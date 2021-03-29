import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

// const queryClient = useQueryClient()
const postPostUrl = 'http://localhost:8080/persons'
// @RequestMapping(method = RequestMethod.POST, value = "/persons/{id}/posts") // spring boot
const getPostsUrl = 'http://localhost:8080/posts' // returns all posts

export const registerUrl = 'http://localhost:8080/register'
export const signInUrl = 'http://localhost:8080/authenticate'

export const fetchPosts = async () => {
    const res = await fetch(getPostsUrl)
    // console.log({ res })
    return res.json()
}

export const useGetPosts = () => {
    return useQuery('allPosts', fetchPosts)
}

export const usePostPost = () => useMutation(postPost, {
    //   onSuccess: () => queryClient.refetchQueries('allPosts') 
    })

export const postPost = async (newPost) => await axios.post(postPostUrl, newPost)