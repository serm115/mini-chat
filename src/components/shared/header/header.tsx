import { FC } from 'react'
import styles from './header.module.scss'

type HeaderProps = {
    title: string
}

export const Header: FC<HeaderProps> = ({ title }) => {
    return <header className={styles.header}>{title}</header>
}
