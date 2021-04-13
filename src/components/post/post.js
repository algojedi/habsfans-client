import React from 'react'

function Post({ name, id, title, content, indentation, handlePostClick }) {
    let rightMargin = '0'
    switch (indentation) {
        case 2:
        case 1:
            console.log('cases 1 or 2')
            rightMargin = '2'
            break
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            console.log('cases 3 - 7')
            rightMargin = '2'
            break
        case 8:
        case 9:
            console.log('case 09')
            rightMargin = '3'
        default:
            rightMargin = '6'
            break
    }

    return (
        <li
            className={`border-indigo-200 ml-${rightMargin} cursor-pointer`}
            onClick={handlePostClick}
        >
            <span className='text-bold text-blue-400 mr-6'>{name}</span>
            <span className='text-blue-800'>{title}</span>
        </li>
    )
}
export default Post
