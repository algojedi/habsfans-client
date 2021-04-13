import axios from 'axios'
import React, { useState } from 'react'
import { registerUrl, signInUrl } from '../../api'
import { btn, textField } from '../../styles'
import './header.scss'

const saveTokenInSession = (token) => {
    window.localStorage.setItem('token', 'Bearer ' + token)
}

export default function Header({ setMessage, saveUser, user }) {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = (e) => {
        e.preventDefault()
        axios
            .post(signInUrl, {
                username,
                password
            })
            .then((data) => {
                if (data) {
                    console.log({ data })
                    saveTokenInSession(data.data.jwt)
                    saveUser(data.data.username)
                    setMessage('') // reset error message
                } else {
                    console.log('oops, something went wrong')
                }
            })
            .catch((err) => {
                // ! handle sign in failure
                console.log('printing err && err.message if block')
                console.log({ err })
                // error message buried in response object
                setMessage(err.response.data.message)
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        axios
            .post(registerUrl, {
                username,
                password,
                email: 'chloe@chloe.com'
            })
            .then(() => setMessage('Registration Successful'))
    }

    return (
        <div className='header'>
            {user && <section className='text-bold'>Hello {user} </section>}
            <form className='form'>
                <input
                    type='text'
                    value={username}
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}
                    className={textField}
                    placeholder='username'
                />
                <input
                    type='text'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    className={textField}
                    placeholder='password'
                />
                <button className={btn} type='submit' onClick={handleSignIn}>
                    Sign in
                </button>
            </form>
            <form className='form'>
                <input
                    type='text'
                    value={username}
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}
                    className={textField}
                    placeholder='username'
                />
                <input
                    type='text'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    className={textField}
                    placeholder='password'
                />
                <button className={btn} onClick={handleRegister}>
                    Register
                </button>
            </form>
        </div>
    )
}
