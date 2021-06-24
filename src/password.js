import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPassword } from './actions'

import './password.css';


import zxcvbn from 'zxcvbn'


function Password() {
    const dispatch = useDispatch()

    const [password, setPassword] = useState('p@$$w0rd')
    const [name, setName] = useState('')
    const [passwordStrength, checkPasswordStrength] = useState(null)

    function generatePassword() {
        var newPassword = Math.random().toString(36).slice(-8);
        setPassword(newPassword)
        checkPasswordStrength(zxcvbn(newPassword).score)
    }

    return (
        <div>
            <div>
                <button className='buttonGenerate' onClick={(e) => {
                    generatePassword()
                }}>Generate</button>
            </div>
            <div>
                <input
                    className='input'
                    id='text-input'
                    onChange={(e) => {
                        setPassword(e.target.value)
                        checkPasswordStrength(zxcvbn(e.target.value).score)
                    }}
                    value={password}
                />
                <p>Password Strength: {passwordStrength}</p>
            </div>

            <div>
                <input
                    className='input'
                    id='text-input'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />
            </div>
            <div>
                <button className='buttonSave' onClick={(e) => {
                    dispatch(addPassword(name, password))
                }}>Save</button>
            </div>
        </div>
    )
}

export default Password
