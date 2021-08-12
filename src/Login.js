import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import firebase from 'firebase'

export default function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isSigningUp, setIsSigningUp] = useState(false)

    const handleChangeEmail = e => setEmail(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)
    const handleIsSigningUp = e => setIsSigningUp(e.target.checked)

    const handleLogin = async () => {
        try {
           await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            setError (error.message)
        }
    }

    const handleSignUp = async () => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
         } catch (error) {
             setError (error.message)
         }
    }
    const handleSubmit = async () => {

        if (!email || !password) {
            setError('Необходимо заполнить все поля')
            return
        }
        if (isSigningUp) {
            handleSignUp ()
            return
        }
        handleLogin ()
       
    }


    return <div>
        <p className="news_page_heading">{isSigningUp ? 'Зарегестрироваться' : 'Войти'}</p>
        <div className="login_form">
            <FormControlLabel
            control={
                <Checkbox 
                checked={isSigningUp}
                onChange={handleIsSigningUp}
                name="checkdB"
                color="primary"/>
            }
            label={<p>Еще нет учетной записи?</p>} />
            <TextField
                type="email"
                onChange={handleChangeEmail}
                variant="filled"
                label="Email"
                helperText="Сюда нужно ввести Email" />
            <TextField
                type="text"
                onChange={handleChangePassword}
                variant="filled"
                label="Пароль"
                helperText="Сюда нужно ввести пароль" />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}>{isSigningUp ? 'Зарегестрироваться' : 'Войти'}</Button>
        </div>
        <p className="error">{error}</p>
    </div>
}