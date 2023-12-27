import { FC, ButtonHTMLAttributes } from 'react'
import styles from './button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string
    type: string
}

export const Button: FC<ButtonProps> = ({ title, type = 'button' }) => {
    return (
        <button className={styles.button} type={type}>
            {title}
        </button>
    )
}
