import { Outlet } from 'react-router-dom'

import styles from './auth-layout.module.scss'

const AuthLayout = () => {
    return (
        <main className={styles.layout}>
            <Outlet />
        </main>
    )
}

export default AuthLayout
