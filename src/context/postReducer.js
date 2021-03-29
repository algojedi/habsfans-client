import cloneDeep from 'lodash/cloneDeep'
import { ADD_POST } from './postsContext';

const addPost = (post, state) => {
    const posts = cloneDeep(state) //state is an array of word information objects
    //check if word already exists in cart
    posts.push(post)
    return posts
}


//state is an array 
export const postReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(action.payload, state)
        // case REMOVE_POST:
        //     return removeWordFromCart(action.payload, state)
        // case SET_CART:
        //     return action.payload
        default:
            return state
    }
}
