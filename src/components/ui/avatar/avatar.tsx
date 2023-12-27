import { FC } from 'react'
import styles from './avatar.module.scss'

type AvatarProps = {
    url: string
    size?: 'small' | 'normal' | 'large'
    type?: 'rounded' | 'square'
}

export const Avatar: FC<AvatarProps> = ({ url, size = 'normal', type = 'rounded' }) => {
    return (
        <div className={`${styles.avatar} ${styles[`size-${size}`]} ${styles[`type-${type}`]}`}>
            <img src={url} className={styles.img} />
        </div>
    )
}
