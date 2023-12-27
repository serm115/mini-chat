import { SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input } from '@components/ui/input'
import styles from './login.module.scss'
import { Button } from '@components/ui/button'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { setAuth } from '@store/slices/auth'

const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    function submitHandler(e: SyntheticEvent) {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            username: { value: string }
            password: { value: string }
        }
        dispatch(setAuth({ username: target.username.value, password: target.password.value }))
        navigate('/', { replace: true })
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input type="text" label="Username" name="username" id="username" required />
            <Input type="password" label="Password" name="password" id="password" required />
            <Button title="Login" type="submit" />
        </form>
    )
}

export default Login
