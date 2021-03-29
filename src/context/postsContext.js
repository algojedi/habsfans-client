import React, { useReducer, createContext } from 'react'
import { postReducer } from './postReducer';

export const ADD_POST = 'ADD_POST'
export const SET_CART = 'SET_CART'

const PostContext = createContext() //creates Provider


// //state is word cart
// const removeWordFromCart = (wordId, state) => {
//     // TODO: make post request to api  to remove word
//     const updatedCart = state.filter((el) => {
//         return el._id !== wordId
//     })
//     if (updatedCart.length === state.length) {
//         return state
//     }
//     return updatedCart
// }

const initialState = ["don't look back in anger", "imagine al the people...", "you know there's going o be answer.", "don't let me down"]

export const PostContextProvider = ({ children }) => {
    const [posts, dispatch] = useReducer(postReducer, initialState) // initialize to empty array

    const addPost = (post) => {
        //wordInfo should be an object holding word information
        dispatch({ type: ADD_POST, payload: post })
    }

    // const removeWordFromCart = (wordId) => {
    //     dispatch({ type: REMOVE_WORD, payload: wordId })
    // }

    // const setCart = (newCart) => {
    //     dispatch({ type: SET_CART, payload: newCart })
    // }

    return (
        <PostContext.Provider
            value={{
                posts,
                addPost,
            }}
        >
            {children}
        </PostContext.Provider>
    )
}

export default PostContext
