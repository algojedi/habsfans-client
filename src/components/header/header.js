import axios from 'axios'
import React, { useRef, useState } from 'react'
import { registerUrl, signInUrl } from '../../api'
import { btn, textField } from '../../styles'
import './header.scss'

const saveTokenInSession = (token) => {
    window.localStorage.setItem('token', "Bearer " + token)
}

export default function Header() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
   const ref = useRef(0)
    ref.current++
    console.log({ref: ref.current})
    const handleSignIn = (e) => {
        e.preventDefault()
        axios
            .post(signInUrl, {
                username,
                password
            })
            .then(data =>  { 
                console.log(data)
                if (data) { 
                    saveTokenInSession(data.data.jwt) } 
                else { console.log("oops, something went wrong")} 
            }).catch(err =>  {
                if (err && err.message) {
                    console.log("printing err && err.message if block")
                    console.log({err}) // err.response.data is the error message
                console.log(err.message)
                } 
                else console.log("no error message?")
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
            .then(console.log)
    }
    return (
        <div className='header'>
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
                <button className={btn} type="submit" onClick={handleSignIn}>Sign in</button>
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
                <button className={btn} onClick={handleRegister}>Register</button>
            </form>
        </div>
    )
}
