import { NavLink } from 'react-router-dom'

import { IconMessage, IconSettings } from '@components/icons'
import styles from './main-navigation.module.scss'

export const MainNavigation = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to="/" className={styles.items}>
                {({ isActive }) => (
                    <div className={`${isActive ? styles.active : ''}`}>
                        <IconMessage className={styles.icon} />
                        <span className={styles.title}>Chats</span>
                    </div>
                )}
            </NavLink>
            <NavLink to="/settings" className={styles.items}>
                {({ isActive }) => (
                    <div className={`${isActive ? styles.active : ''}`}>
                        <IconSettings className={styles.icon} />
                        <span className={styles.title}>Settings</span>
                    </div>
                )}
            </NavLink>
        </nav>
    )
}
