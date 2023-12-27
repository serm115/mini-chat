import { FC } from 'react'
import styles from './input.module.scss'

type InputProps = {
    label?: string
    type: string
    required: boolean
    name: string
    id?: string
}

export const Input: FC<InputProps> = ({ label, type = 'text', required, name, id }) => {
    return (
        <div>
            {label && (
                <label className={styles.label} htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                className={styles.input}
                type={type}
                id={id}
                name={name}
                autoComplete="off"
                required={required}
            />
        </div>
    )
}
