import React, { useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import './password-list.css'

import { deletePassword } from './actions/index'

function PasswordList() {
    const dispatch = useDispatch()
    const passwords = useSelector((state) => state.passwords)

    const passwordList = passwords.map((pass, index) => {

        return (
            <div key={index}>
                Name: {pass.name} || Password: {pass.password}
                <button className='buttonDelete' onClick={() => dispatch(deletePassword(index))}>delete</button>
            </div>)
    })

    return (
        <div>
            {passwordList}
        </div>
    )
}

export default PasswordList
