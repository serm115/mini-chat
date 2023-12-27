import { Outlet } from 'react-router-dom'

import { MainNavigation } from '@components/shared/main-navigation'
import styles from './main-layout.module.scss'

const MainLayout = () => {
    return (
        <main className={styles.layout}>
            <Outlet />
            <MainNavigation />
        </main>
    )
}

export default MainLayout
